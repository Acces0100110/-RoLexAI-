// backend/upload.js
// Endpoint pentru upload documente și extragere text (PDF, imagini)
const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Helper pentru extragere text din PDF
async function extractTextFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

// Helper pentru extragere text din imagine
async function extractTextFromImage(filePath) {
  const { data: { text } } = await Tesseract.recognize(filePath, 'ron');
  return text;
}

router.post('/', upload.single('document'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Niciun fișier încărcat.' });
  const ext = path.extname(req.file.originalname).toLowerCase();
  let extractedText = '';
  try {
    if (ext === '.pdf') {
      extractedText = await extractTextFromPDF(req.file.path);
    } else if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      extractedText = await extractTextFromImage(req.file.path);
    } else {
      return res.status(400).json({ error: 'Format de fișier neacceptat.' });
    }
    // Șterge fișierul după procesare
    fs.unlinkSync(req.file.path);
    res.json({ text: extractedText });
  } catch (err) {
    fs.unlinkSync(req.file.path);
    res.status(500).json({ error: 'Eroare la procesarea documentului.' });
  }
});

module.exports = router;
