const express = require('express');
const path = require('path');
const app = express();

// Servește fișierele statice din directorul demo
app.use(express.static(path.join(__dirname, '../demo')));

// Route pentru root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../demo/index.html'));
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n========================================`);
  console.log(`📱 RoLexAI Web App pornit!`);
  console.log(`========================================`);
  console.log(`\n🌐 Accesează pe telefon:`);
  console.log(`   http://localhost:${PORT}`);
  
  // Afișează IP-ul local pentru acces de pe telefon
  const os = require('os');
  const networkInterfaces = os.networkInterfaces();
  
  Object.keys(networkInterfaces).forEach(interfaceName => {
    networkInterfaces[interfaceName].forEach(network => {
      if (network.family === 'IPv4' && !network.internal) {
        console.log(`   http://${network.address}:${PORT}`);
      }
    });
  });
  
  console.log(`\n📲 Scanează QR code sau introdu IP-ul în browser pe telefon`);
  console.log(`========================================\n`);
});
