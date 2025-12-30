// Backend entry point for RoLexAI
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Upload documente
const uploadRouter = require('./upload');
app.use('/api/upload', uploadRouter);

// Autentificare Google și Apple
const authRouter = require('./auth');
app.use('/api/auth', authRouter);

// Scraping modules
const { getLatestLegisRoLaws } = require('./scraping/legisRo');
const { getLatestNlexLaws } = require('./scraping/nLex');

// API pentru legi actualizate de pe legis.ro
app.get('/api/legisro', async (req, res) => {
  const laws = await getLatestLegisRoLaws();
  res.json({ laws });
});

// API pentru legi actualizate de pe n-lex.europa.eu
app.get('/api/nlex', async (req, res) => {
  const laws = await getLatestNlexLaws();
  res.json({ laws });
});

// Integrare Groq GPT
const { chatWithGroq } = require('./utils/groq');

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Mesajele lipsesc sau nu sunt în format corect.' });
  }
  const reply = await chatWithGroq(messages);
  res.json({ reply });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
