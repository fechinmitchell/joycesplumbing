const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5007;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3007',
  credentials: true
}));
app.use(express.json());

let contactSubmissions = [];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: "Joyce's Plumbing API running" });
});

app.get('/', (req, res) => {
  res.json({ message: "Joyce's Plumbing API" });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please fill in all required fields' });
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      phone: phone || 'Not provided',
      message,
      createdAt: new Date().toISOString()
    };

    contactSubmissions.push(submission);
    console.log('New submission:', { id: submission.id, name, email });

    res.status(201).json({ success: true, message: "Thank you! We'll be in touch soon." });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

app.get('/api/submissions', (req, res) => {
  res.json({ success: true, data: contactSubmissions });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
