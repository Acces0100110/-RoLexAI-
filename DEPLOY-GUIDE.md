# 🚀 Deploy RoLexAI - Ghid Complet

## 📋 Cuprins
1. [Deploy Backend (Railway/Render)](#backend-deploy)
2. [Deploy Frontend Web (Vercel)](#frontend-deploy)
3. [Setup Bot Telegram](#telegram-bot)
4. [Promovare pe Social Media](#social-media)

---

## 🔧 Backend Deploy

### Opțiunea 1: Railway (Recomandat) ⭐

**Pas 1:** Creează cont pe [Railway.app](https://railway.app)

**Pas 2:** Instalează Railway CLI
```bash
npm install -g @railway/cli
railway login
```

**Pas 3:** Deploy
```bash
cd backend
railway init
railway up
```

**Pas 4:** Setează variabilele de mediu în Railway Dashboard:
- `GROQ_API_KEY` - cheia ta Groq
- `PORT` - 5001
- `TELEGRAM_BOT_TOKEN` - (opțional)

**Pas 5:** Obține URL-ul live (ex: `https://your-app.railway.app`)

---

### Opțiunea 2: Render

**Pas 1:** Push codul pe GitHub

**Pas 2:** Mergi pe [Render.com](https://render.com)

**Pas 3:** New > Web Service

**Pas 4:** Conectează repo-ul GitHub

**Pas 5:** Configurare:
```
Build Command: npm install
Start Command: node index.js
```

**Pas 6:** Environment Variables:
```
GROQ_API_KEY=your_key
PORT=5001
```

---

## 🌐 Frontend Deploy (Vercel)

### Deploy Web App

**Pas 1:** Creează `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "demo/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/demo/$1"
    }
  ]
}
```

**Pas 2:** Instalează Vercel CLI
```bash
npm install -g vercel
```

**Pas 3:** Deploy
```bash
vercel --prod
```

**Pas 4:** Actualizează `demo/index.html` cu URL-ul backend:
```javascript
const API_URL = 'https://your-backend.railway.app/api/chat';
```

---

## 🤖 Setup Bot Telegram

### Pas 1: Creează Botul

1. Deschide Telegram și caută **@BotFather**
2. Trimite `/newbot`
3. Alege un nume: `RoLexAI Bot`
4. Alege un username: `RoLexAI_bot` (trebuie să se termine cu `_bot`)
5. Copiază **token-ul** primit

### Pas 2: Configurare

Editează `backend/.env`:
```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
BACKEND_URL=http://localhost:5001
```

### Pas 3: Pornire Bot

**Local:**
```bash
node backend/telegram-bot.js
```

**SAU dublu-click:**
```
start-telegram-bot.bat
```

### Pas 4: Deploy Bot (Production)

Pe Railway/Render, creează un **nou service** pentru bot:

**Render:**
- New > Background Worker
- Start Command: `node telegram-bot.js`
- Setează variabilele de mediu

**Railway:**
```bash
cd backend
railway run node telegram-bot.js
```

---

## 📱 Social Media & Promovare

### Twitter/X

**Post de lansare:**
```
🚀 Am lansat RoLexAI - primul asistent juridic AI pentru legislația română! 🇷🇴⚖️

✨ Ce poate face:
• Explică legi și OUG-uri
• Răspunde instant la întrebări juridice
• Disponibil 24/7
• Powered by AI (Llama 3.3)

Testează aici: [LINK]

#RoLexAI #LegalTech #AI #Romania
```

**Hashtags recomandate:**
- #RoLexAI
- #LegalTech
- #ArtificialIntelligence
- #Romania
- #Innovation
- #Startup
- #Tech

### Product Hunt

**Lansare Product Hunt:**

1. Mergi pe [producthunt.com](https://producthunt.com)
2. Submit Product
3. Completează:
   - **Tagline:** "AI-powered legal assistant for Romanian law"
   - **Description:** Poveste despre problemă și soluție
   - **Screenshot-uri:** Demo app
   - **Link:** URL-ul live

**Template descriere:**
```
🇷🇴 RoLexAI is an AI-powered legal assistant that helps Romanians understand their laws better.

🤔 The Problem:
Legal language is complex and hard to understand. People struggle to find quick answers about Romanian legislation.

✅ The Solution:
RoLexAI uses advanced AI (Llama 3.3 70B) to:
• Answer legal questions in plain Romanian
• Explain OUGs, laws, and legal terms
• Provide instant 24/7 assistance
• Available via web & Telegram

🚀 Features:
- Real-time AI chat
- Document upload & analysis
- Latest laws scraping
- Multi-platform (web, mobile, Telegram)

Built with: Node.js, React Native, Groq AI, Telegram API
```

### LinkedIn

**Post:**
```
🎉 Excited to launch RoLexAI!

After seeing how many Romanians struggle with understanding legal documents and laws, I built an AI assistant that makes legal information accessible to everyone.

🔑 Key features:
✅ Instant answers about Romanian legislation
✅ OUG explanations in simple language
✅ 24/7 availability via web and Telegram
✅ Powered by advanced AI (Groq Llama 3.3)

This is just the beginning. My vision is to democratize legal knowledge and make it accessible to all Romanians.

Try it: [LINK]

#LegalTech #AI #Innovation #Romania
```

### Reddit

**Subreddits pentru post:**
- r/Romania
- r/LegalTech
- r/SideProject
- r/startups
- r/artificial

**Template post r/Romania:**
```
[Proiect] Am creat RoLexAI - asistent juridic AI pentru legi românești

Salut r/Romania!

Am creat un asistent AI care răspunde la întrebări despre legislația română. M-am săturat să caut prin sute de pagini de legi, așa că am automatizat procesul.

Ce poate face:
• Explică OUG-uri și legi în limbaj simplu
• Răspunde instant la întrebări juridice
• Disponibil pe web și Telegram
• Gratis de folosit

Link: [URL]

Feedback-ul vostru e super apreciat! Ce features ați mai vrea?
```

### Facebook Groups

**Grupuri relevante:**
- Grupuri de drept/juridice românești
- Grupuri de antreprenoriat
- Grupuri tech/programming România
- Startup community groups

### Telegram

**Canale unde să promovezi:**
1. Creează canal propriu: @RoLexAI_Updates
2. Postează în grupuri de tech românești
3. Comunități de startups

**Post promovare:**
```
🤖 RoLexAI Bot este LIVE!

Acum poți întreba orice despre legislația română direct pe Telegram.

🔍 Caută @RoLexAI_bot și începe cu /start

✨ Complet gratuit
⚡ Răspunsuri instant
🇷🇴 Optimizat pentru legi românești
```

---

## 📊 Analytics & Tracking

### Adaugă Google Analytics

În `demo/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Telegram Bot Analytics

Adaugă tracking pentru:
- Număr utilizatori unici
- Mesaje procesate
- Comenzi folosite
- Erori

---

## 🎯 Launch Checklist

### Pre-Launch
- [ ] Backend deployed și funcțional
- [ ] Frontend deployed pe Vercel
- [ ] Telegram bot funcțional
- [ ] Toate API keys configurate
- [ ] Testing complet
- [ ] Analytics configurat
- [ ] Screenshot-uri pentru promovare
- [ ] Video demo (opțional)

### Launch Day
- [ ] Post pe Twitter/X
- [ ] Post pe LinkedIn
- [ ] Submit Product Hunt
- [ ] Post pe Reddit (r/Romania, r/SideProject)
- [ ] Post în grupuri Facebook
- [ ] Anunț în canale Telegram
- [ ] Email către early adopters

### Post-Launch
- [ ] Monitorizare feedback
- [ ] Fix bugs urgent
- [ ] Răspuns la comentarii
- [ ] Update documentație
- [ ] Plan următoarele features

---

## 🔗 Link-uri Utile

**Deploy Platforms:**
- [Railway](https://railway.app)
- [Render](https://render.com)
- [Vercel](https://vercel.com)
- [Heroku](https://heroku.com)

**Bot Setup:**
- [Telegram BotFather](https://t.me/botfather)
- [Telegram Bot API Docs](https://core.telegram.org/bots)

**Promovare:**
- [Product Hunt](https://producthunt.com)
- [Hacker News](https://news.ycombinator.com)
- [Reddit r/SideProject](https://reddit.com/r/SideProject)

**Analytics:**
- [Google Analytics](https://analytics.google.com)
- [Mixpanel](https://mixpanel.com)
- [PostHog](https://posthog.com)

---

## 💡 Tips pentru Succes

1. **Test totul** înainte de lansare
2. **Răspunde rapid** la feedback
3. **Fii transparent** despre limitări
4. **Adaugă features** bazat pe cereri
5. **Documentează** tot pentru usability
6. **Promovează constant** pe social media
7. **Build in public** - share progresul

🚀 **Mult succes cu lansarea RoLexAI!**
