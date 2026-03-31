/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
const EMAIL_MODE = process.env.EMAIL_MODE || 'mock'; // 'mock' | 'smtp'

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  }),
);

app.use(express.json());

let transporter = null;

if (EMAIL_MODE !== 'mock') {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post('/api/contact', async (req, res) => {
  const { name, email, organization, inquiryType, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const companyRecipient = process.env.CONTACT_TO || 'dev1@flickit.me';
  const fromAddress = process.env.MAIL_FROM || process.env.SMTP_USER;

  try {
    const companyMail = {
      from: fromAddress,
      to: companyRecipient,
      subject: `[GovFlow contact] ${inquiryType || 'Inquiry'} from ${name}`,
      text: [
        'New inquiry from GovFlow landing page:',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || '-'}`,
        `Inquiry type: ${inquiryType || '-'}`,
        '',
        'Message:',
        message || '-',
      ].join('\n'),
    };

    const userMail = {
      from: fromAddress,
      to: email,
      subject: 'We received your GovFlow inquiry',
      text: [
        `Hi ${name},`,
        '',
        'Thank you for reaching out about GovFlow. We received your message and will get back to you shortly.',
        '',
        'Here is a copy of what you sent:',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || '-'}`,
        `Inquiry type: ${inquiryType || '-'}`,
        '',
        'Message:',
        message || '-',
        '',
        'Best regards,',
        'The GovFlow team',
      ].join('\n'),
    };

    if (EMAIL_MODE === 'mock') {
      console.log('--- MOCK company email (would be sent to internal team) ---');
      console.log(companyMail);
      console.log('--- MOCK user confirmation email (would be sent to visitor) ---');
      console.log(userMail);
    } else {
      await transporter.sendMail(companyMail);
      await transporter.sendMail(userMail);
    }

    return res.json({ ok: true, mode: EMAIL_MODE });
  } catch (error) {
    console.error('Error sending contact emails', error);
    return res.status(500).json({ error: 'Failed to send emails.' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
  console.log(`Allowing requests from: ${CLIENT_ORIGIN}`);
  console.log(`Email mode: ${EMAIL_MODE}`);
});

