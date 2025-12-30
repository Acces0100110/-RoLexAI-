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

// Endpoint pentru actualizare manuală legislație
const { actualizareaManuala, incarcaLegislatie } = require('./utils/legislationScheduler');

app.post('/api/update-legislation', async (req, res) => {
  try {
    console.log('🔄 Actualizare legislație declanșată manual...');
    await actualizareaManuala();
    res.json({ success: true, message: 'Legislația a fost actualizată cu succes!' });
  } catch (error) {
    res.status(500).json({ error: 'Eroare la actualizarea legislației' });
  }
});

app.get('/api/legislation-status', async (req, res) => {
  try {
    const legi = await incarcaLegislatie();
    res.json({
      total: legi.length,
      lastUpdate: legi[0]?.dataActualizare || 'Niciodată',
      coduri: legi.map(l => ({ nume: l.nume, articole: l.articole?.length || 0 }))
    });
  } catch (error) {
    res.json({ total: 0, lastUpdate: 'Niciodată', coduri: [] });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  
  // Pornește scheduler pentru actualizare automată
  const { startScheduler } = require('./utils/legislationScheduler');
  startScheduler();
  
  console.log('✅ Legislation auto-update scheduler started!');
});
