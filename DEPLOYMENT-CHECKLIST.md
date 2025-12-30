# 🚀 DEPLOYMENT RAPID - 10 MINUTE

## ✅ Checklist Deployment

### 1️⃣ BACKEND (Render.com) - 5 minute

📌 **Link**: https://render.com/

**Pași**:
- [ ] 1. Creează cont pe Render.com (Login cu GitHub)
- [ ] 2. Click "New +" → "Web Service"
- [ ] 3. Conectează repository GitHub "RoLexAI"
- [ ] 4. Setări:
  - Name: `rolexai-backend`
  - Region: `Frankfurt`
  - Root Directory: `backend`
  - Build Command: `npm install`
  - Start Command: `node index.js`
- [ ] 5. Environment Variables:
  - `GROQ_API_KEY` → `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`
  - `PORT` → `5001`
- [ ] 6. Click "Create Web Service"
- [ ] 7. **COPIAZĂ URL** (ex: `https://rolexai-backend.onrender.com`)

---

### 2️⃣ FRONTEND (Vercel.com) - 3 minute

📌 **Link**: https://vercel.com/

**Pași**:
- [ ] 1. Creează cont pe Vercel.com (Login cu GitHub)
- [ ] 2. Click "Add New..." → "Project"
- [ ] 3. Import repository: `RoLexAI`
- [ ] 4. Setări:
  - Framework Preset: `Other`
  - Root Directory: `demo`
  - Build Command: (lasă gol)
  - Output Directory: `.`
- [ ] 5. Click "Deploy"
- [ ] 6. **COPIAZĂ URL** (ex: `https://rolexai.vercel.app`)

---

### 3️⃣ CONECTARE BACKEND → FRONTEND - 2 minute

- [ ] 1. Deschide fișierul: `demo/index.html`
- [ ] 2. Caută linia (~220):
```javascript
const apiUrl = 'http://localhost:5001';
```
- [ ] 3. Înlocuiește cu URL-ul tău Render:
```javascript
const apiUrl = 'https://rolexai-backend.onrender.com';
```
- [ ] 4. Salvează și push pe GitHub:
```bash
git add .
git commit -m "Update production backend URL"
git push
```
- [ ] 5. Vercel va redeploy automat în 30 secunde

---

### 4️⃣ TESTARE - 1 minut

- [ ] 1. Deschide URL-ul Vercel în browser
- [ ] 2. Testează chat: "Ce pedepse sunt pentru furt în România?"
- [ ] 3. Testează upload: încarcă o poză cu text
- [ ] 4. Verifică că răspunsurile citează articole din Codul Penal

---

### 5️⃣ LANSARE PE X (Twitter)

**Template Tweet:**

```
🚀 LANSEZ ROLEXAI - BETA! 🇷🇴

AI legal assistant specializat în legislația din România!

✅ Chat cu AI despre legi românești  
✅ Upload documente (OCR + analiză)  
✅ Căutare în Codul Penal și Civil  
✅ Răspunsuri cu articole exacte

📱 Testează ACUM (PWA - instalabil pe telefon):
👉 [URL-UL TĂU VERCEL]

🔥 100% GRATUIT - Primii 100 testeri primesc feedback prioritar!

#RoLexAI #LegalTech #Romania #AI #LegalAssistant
#CoduPenal #LegislațieRomânia #BetaTesting
```

**Hashtags**:
#RoLexAI #LegalTech #Romania #AI #AIRO #LegalAssistant #CoduPenal #LegislațieRomânia #StartupRomania #TechRomania #BetaTesting

---

## 🎯 DUPĂ LANSARE

1. **Monitorizare**:
   - Verifică Render logs: `https://dashboard.render.com/`
   - Verifică Vercel analytics: `https://vercel.com/dashboard`

2. **Feedback**:
   - Adaugă Google Form pentru feedback
   - Creează Discord/Telegram pentru beta testeri

3. **Îmbunătățiri**:
   - Adaugă autentificare (Google/Email)
   - Adaugă istoric conversații
   - Upgrade la plan paid pe Render dacă trafic > 750h/lună

---

## 💰 COSTURI

| Serviciu | Plan | Cost | Limite |
|----------|------|------|--------|
| **Render.com** | Free | 0 RON | 750 ore/lună, sleep după 15min inactivitate |
| **Vercel** | Hobby | 0 RON | Unlimited bandwidth |
| **Groq API** | Free | 0 RON | 14400 requests/zi |
| **TOTAL** | - | **0 RON/lună** | ✅ |

**Note**:
- Render se oprește după 15 min → prima cerere durează 30s (cold start)
- Vercel nu se oprește niciodată → instant loading
- Groq = 14400 req/zi = ~600 req/oră = suficient pentru beta

---

## 🆘 TROUBLESHOOTING

**Backend nu pornește pe Render?**
→ Verifică logs în Render Dashboard → vei vedea erori npm install

**Frontend nu se conectează la backend?**
→ Verifică în Console (F12) → Network tab → vezi URL-ul apelat

**CORS errors?**
→ Asigură-te că backend are `cors()` middleware (e deja setat!)

**Upload nu funcționează?**
→ Normal! Render nu salvează fișiere permanent (e storage temporar)

---

## 📞 NEXT STEPS

După ce primești feedback de la beta testeri:

1. **Adaugă features**:
   - [ ] Căutare semantică în legi
   - [ ] Export conversații PDF
   - [ ] Multilingv (RO/EN)

2. **Monetizare** (opțional):
   - [ ] Premium tier cu Groq mai rapid
   - [ ] API pentru dezvoltatori
   - [ ] White-label pentru cabinete avocatură

3. **Scalare**:
   - [ ] Upgrade Render la Standard ($7/lună)
   - [ ] Database pentru istoric (MongoDB free tier)
   - [ ] Caching cu Redis

---

**SUCCES LA LANSARE! 🚀🇷🇴**
