# 🚀 Ghid Deployment RoLexAI

## OPȚIUNE 1: Deployment cu Vercel (CEL MAI SIMPLU) ⭐

### Pasul 1: Deploy Backend pe Render.com

1. Deschide în browser: **https://render.com**
2. Click pe **"Sign Up"** sau **"Log In"** (poți folosi GitHub)
3. Click pe **"New +"** → **"Web Service"**
4. Conectează GitHub repo-ul tău: `RoLexAI`
5. Configurează:
   - **Name**: `rolexai-backend`
   - **Region**: Frankfurt (cel mai aproape de România)
   - **Branch**: main
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
6. Click pe **"Advanced"** → **"Add Environment Variable"**:
   - `GROQ_API_KEY` = `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`
   - `PORT` = `5001`
7. Click pe **"Create Web Service"**
8. **AȘTEAPTĂ 3-5 MINUTE** până se buildează
9. **COPIAZĂ URL-UL** (ex: `https://rolexai-backend.onrender.com`)

### Pasul 2: Deploy Frontend pe Vercel

#### A. Prin Website (RECOMANDAT)

1. Deschide în browser: **https://vercel.com**
2. Click pe **"Sign Up"** sau **"Login"** (folosește GitHub)
3. Click pe **"Add New..."** → **"Project"**
4. Import GitHub repo: `RoLexAI`
5. Configurează:
   - **Framework Preset**: Other
   - **Root Directory**: `demo`
   - **Build Command**: (lasă gol)
   - **Output Directory**: `.`
6. Click pe **"Deploy"**
7. **COPIAZĂ URL-UL** frontend (ex: `https://rolexai.vercel.app`)

#### B. Prin Terminal (Alternativ)

```bash
# 1. Login la Vercel (se deschide browser)
cd c:\Users\Hp\Documents\GitHub\RoLexAI\demo
vercel login

# 2. Deploy
vercel --prod

# IMPORTANT: Când te întreabă:
# - Set up and deploy? → YES
# - Which scope? → (alege contul tău)
# - Link to existing project? → NO
# - Project name? → rolexai
# - Directory? → (apasă ENTER pentru "demo")
# - Override settings? → NO
```

### Pasul 3: Conectează Frontend cu Backend

1. Deschide fișierul: `demo/index.html`
2. Găsește linia (în jur de linia 200-250):
   ```javascript
   const apiUrl = 'http://localhost:5001';
   ```
3. Înlocuiește cu URL-ul tău de pe Render:
   ```javascript
   const apiUrl = 'https://rolexai-backend.onrender.com';
   ```
4. Salvează fișierul
5. Push pe GitHub:
   ```bash
   cd c:\Users\Hp\Documents\GitHub\RoLexAI
   git add .
   git commit -m "Update backend URL pentru production"
   git push
   ```
6. Vercel va redeploy automat (sau rulează `vercel --prod` din nou)

---

## OPȚIUNE 2: Deployment Rapid cu Netlify (Alternativă)

### Pentru Frontend:

1. Deschide: **https://netlify.com**
2. Drag & drop folderul `demo` direct pe site
3. Gata! Primești URL instant: `https://rolexai.netlify.app`

### Pentru Backend:

Folosește Render.com (pasul 1 de mai sus)

---

## 📱 TESTARE FINALĂ

1. Deschide URL-ul frontend în browser
2. Testează:
   - ✅ Chat cu AI (întreabă ceva despre legi din România)
   - ✅ Upload document (încarcă o poză sau PDF)
   - ✅ Scraping legi (caută "Codul Penal")

3. Testează pe **telefon**:
   - Deschide URL-ul Vercel/Netlify
   - Adaugă la Home Screen (iOS/Android)
   - Folosește ca aplicație nativă

---

## 🎯 LANSARE PE TWITTER/X

După ce totul funcționează, postează pe X:

```
🚀 LANSEZ ROLEXAI - BETA! 🇷🇴

AI legal assistant specializat în legislația din România! 

✅ Chat cu AI despre legi românești
✅ Upload documente (OCR + analiză)
✅ Căutare în Codul Penal și Civil
✅ Răspunsuri cu articole exacte

📱 Testează ACUM (PWA - instalabil pe telefon):
👉 [URL-UL TĂU VERCEL]

🔥 100% GRATUIT - Primii 100 testeri primesc acces VIP!

#RoLexAI #LegalTech #Romania #AI #LegalAssistant
#CoduPenal #LegislațieRomânia #BetaTesting
```

---

## 🔧 DEBUGGING

### Backend nu răspunde:
- Verifică logs pe Render.com → Dashboard → Logs
- Asigură-te că `GROQ_API_KEY` e setat corect în Environment Variables

### Frontend nu se conectează:
- Verifică că URL-ul backend e corect în `index.html`
- Deschide Console (F12) în browser pentru erori

### Upload nu merge:
- Render.com nu salvează fișiere permanent (e normal)
- Fișierele uploadate se procesează, dar nu rămân salvate după restart

---

## 💰 COSTURI

- **Render.com**: GRATIS (750 ore/lună)
  - App se oprește după 15 min inactivitate
  - Se repornește automat când cineva accesează
  
- **Vercel**: GRATIS (unlimited pentru personal projects)
  - 100% uptime
  - CDN global (super rapid)

- **Total**: **0 LEI/LUNĂ** ✅

---

## 📞 SUPORT

Dacă ai probleme:
1. Verifică logs pe Render/Vercel dashboards
2. Testează local mai întâi (`npm start` în backend + `node server.js` în demo)
3. Asigură-te că Git repo e pushed pe GitHub

**IMPORTANT**: După deployment, actualizează LANSARE-BETA.md cu URL-urile tale finale!
