import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return ctx;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    ({ type = 'info', title, message, duration = 4000 }) => {
      if (!title && !message) return;

      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const toast = { id, type, title, message };

      // Only keep the latest toast so they don't stack on top of each other
      setToasts([toast]);

      window.setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast],
  );

  const getTypeClasses = (type) => {
    switch (type) {
      case 'success':
        return 'border-emerald-500/80 bg-emerald-900/80 text-emerald-50';
      case 'error':
        return 'border-rose-500/80 bg-rose-900/80 text-rose-50';
      case 'warning':
        return 'border-amber-500/80 bg-amber-900/80 text-amber-50';
      default:
        return 'border-slate-600/80 bg-slate-900/80 text-slate-50';
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="pointer-events-none fixed top-4 right-4 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto w-80 max-w-[90vw] rounded-2xl border backdrop-blur-xl px-4 py-3 shadow-2xl shadow-black/40 ring-1 ring-white/10 transition-all duration-200 ${
              getTypeClasses(toast.type)
            }`}
          >
            {toast.title && (
              <p className="text-sm font-semibold leading-snug mb-1">{toast.title}</p>
            )}
            {toast.message && (
              <p className="text-xs leading-relaxed text-slate-100/90">{toast.message}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

