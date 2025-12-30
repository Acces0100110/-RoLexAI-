# 🇷🇴 RoLexAI - Asistent Juridic AI pentru Legislația Română ⚖️

<div align="center">

![RoLexAI](https://img.shields.io/badge/RoLexAI-Legal%20AI-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![AI](https://img.shields.io/badge/AI-Llama%203.3%2070B-orange?style=for-the-badge)

**Asistentul tău juridic inteligent powered by AI**

[Demo Live](#) • [Telegram Bot](#) • [Documentație](DEPLOY-GUIDE.md)

</div>

---

## ✨ Features

🤖 **Chat AI Avansat**
- Răspunsuri instant despre legislația română
- Context conversațional
- Explicații în limbaj simplu

⚖️ **Cunoștințe Juridice**
- Ordonanțe de Urgență (OUG)
- Codul Penal & Civil
- Legi și reglementări
- Termeni juridici

📱 **Multi-Platform**
- 🌐 Web App (Desktop & Mobile)
- 📲 Telegram Bot
- 📱 React Native App (iOS/Android)

🚀 **Tehnologie Modernă**
- AI: Groq Llama 3.3 70B Versatile
- Backend: Node.js + Express
- Frontend: React Native + Expo
- Bot: Telegraf
- Scraping: Legis.ro & N-Lex

---

## 🎯 Quick Start

### 1️⃣ Pornire Rapidă (Local)

```bash
# Clonează repo
git clone https://github.com/YOUR_USERNAME/RoLexAI.git
cd RoLexAI

# Instalează dependențe backend
cd backend
npm install

# Configurează .env
cp .env.example .env
# Editează .env și adaugă GROQ_API_KEY

# Pornește backend
node index.js
```

**SAU folosește script-urile:**
- Dublu-click `start-backend.bat` - Pornește backend
- Dublu-click `start-web-mobile.bat` - Pornește web server
- Dublu-click `start-all.bat` - Pornește tot

### 2️⃣ Accesare

**Pe PC:**
```
http://localhost:3000
```

**Pe Telefon (același WiFi):**
```
http://[IP-UL-PC]:3000
```

Găsește IP-ul cu: `ipconfig` (Windows) sau `ifconfig` (Mac/Linux)

---

## 📸 Screenshots

<div align="center">
<img src="docs/screenshots/chat.png" width="45%">
<img src="docs/screenshots/mobile.png" width="45%">
</div>

---

## 🛠️ Tehnologii

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Groq AI** - LLM inference
- **Axios** - HTTP client
- **Cheerio** - Web scraping
- **Multer** - File uploads
- **Tesseract.js** - OCR
- **PDF-Parse** - PDF processing

### Frontend Web
- **HTML5** + **CSS3**
- **Vanilla JavaScript**
- **Responsive Design**
- **Modern UI/UX**

### Mobile App
- **React Native**
- **Expo**
- **React Navigation**

### Bot
- **Telegraf** - Telegram bot framework
- **Context management**

---

## 🔧 Configurare Completă

### 1. Backend Setup

```bash
cd backend
npm install
```

Creează `.env`:
```env
PORT=5001
GROQ_API_KEY=your_groq_api_key
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
BACKEND_URL=http://localhost:5001
```

### 2. Frontend Web

```bash
# Server-ul e deja configurat
cd demo
node server.js
```

### 3. Mobile App

```bash
cd frontend
npm install
npx expo start
```

### 4. Telegram Bot

```bash
# Obține token de la @BotFather
# Adaugă în .env
node backend/telegram-bot.js
```

---

## 🚀 Deploy în Producție

Consultă [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md) pentru:
- ☁️ Deploy pe Railway/Render
- 🌐 Frontend pe Vercel
- 🤖 Telegram Bot setup
- 📱 Social media launch

---

## 📚 Documentație

- [START.md](START.md) - Ghid pornire servere
- [ACCES-TELEFON.md](ACCES-TELEFON.md) - Acces de pe telefon
- [TEST-STATUS.md](TEST-STATUS.md) - Status testare
- [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md) - Deploy complet

---

## 🎨 Design Features

✨ **UI Modern**
- Gradienți animați
- Glassmorphism effects
- Smooth animations
- Typing indicators
- Responsive design

💬 **Chat Experience**
- Mesaje cu animații
- Context păstrat
- Share pe social media
- Clear chat function

---

## 🤝 Contribute

Contribuțiile sunt binevenite! 

1. Fork the repo
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📝 Roadmap

- [x] Chat AI cu Groq
- [x] Web interface
- [x] Telegram bot
- [x] Upload documente
- [x] Web scraping legi
- [ ] Autentificare utilizatori
- [ ] Bază de date conversații
- [ ] API public
- [ ] Plugin WordPress
- [ ] Chrome Extension
- [ ] WhatsApp Bot

---

## 📄 Licență

MIT License - vezi [LICENSE](LICENSE) pentru detalii

---

## 🙏 Credits

**Developed by:** [Numele Tău]

**Powered by:**
- [Groq](https://groq.com) - AI Inference
- [Legis.ro](https://legis.ro) - Legislație
- [N-Lex](https://n-lex.europa.eu) - EUR-Lex

---

## 📞 Contact & Support

- 🐦 Twitter: [@YourTwitter](#)
- 💬 Telegram: [@RoLexAI_bot](#)
- 📧 Email: your@email.com
- 🌐 Website: [rolexai.com](#)

---

<div align="center">

**Made with ❤️ in România 🇷🇴**

[⬆ Back to Top](#-rolexai---asistent-juridic-ai-pentru-legislația-română-️)

</div>
