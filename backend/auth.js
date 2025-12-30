// auth.js
// Autentificare Google și Apple pentru RoLexAI
const express = require('express');
const router = express.Router();

// Pentru Google OAuth
// Recomandat: passport-google-oauth20 sau google-auth-library
// Pentru Apple: apple-signin-auth

// Placeholder endpoints pentru login
router.post('/google', async (req, res) => {
  // TODO: Integrare Google OAuth
  res.json({ message: 'Autentificare Google - de implementat' });
});

router.post('/apple', async (req, res) => {
  // TODO: Integrare Apple Sign In
  res.json({ message: 'Autentificare Apple - de implementat' });
});

module.exports = router;
