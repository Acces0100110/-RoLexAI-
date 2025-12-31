# ⚡ QUICK START - Deployment în 10 Minute

## 🎯 CE TREBUIE SĂ FAC ACUM?

Totul e pregătit! Trebuie doar să urmezi **5 pași simpli**:

---

## PASUL 1: GitHub (2 min)

### Browser:
1. Deschide: https://github.com/new
2. Repository name: **RoLexAI**
3. Description: **🇷🇴 Romanian Legal AI Assistant**
4. Public ✅
5. Click "Create repository"
6. **COPIAZĂ** URL-ul (ex: `https://github.com/USERNAME/RoLexAI.git`)

### PowerShell:
```powershell
cd c:\Users\Hp\Documents\GitHub\RoLexAI
git remote add origin https://github.com/USERNAME/RoLexAI.git
git push -u origin main
```

✅ Gata! Codul e pe GitHub.

---

## PASUL 2: Deploy Backend - Render.com (3 min)

1. Deschide: https://render.com
2. Sign Up cu GitHub
3. "New +" → "Web Service"
4. Selectează repo **RoLexAI**
5. Setări:
   - Name: `rolexai-backend`
   - Region: `Frankfurt`
   - Root Directory: `backend`
   - Build: `npm install`
   - Start: `node index.js`
6. Environment Variables:
   - `GROQ_API_KEY` = `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`
   - `PORT` = `5001`
7. Create Web Service

**AȘTEAPTĂ 3-5 MIN** → **COPIAZĂ URL** (ex: `https://rolexai-backend.onrender.com`)

---

## PASUL 3: Update Frontend (1 min)

1. Deschide: `demo/index.html`
2. Linia ~220, schimbă:
   ```javascript
   const apiUrl = 'http://localhost:5001';
   ```
   în:
   ```javascript
   const apiUrl = 'https://rolexai-backend.onrender.com';
   ```
   (folosește URL-ul tău de pe Render!)

3. Salvează
4. PowerShell:
   ```powershell
   git add demo/index.html
   git commit -m "Update backend URL"
   git push
   ```

---

## PASUL 4: Deploy Frontend - Vercel (2 min)

1. Deschide: https://vercel.com
2. Sign Up cu GitHub
3. "Add New..." → "Project"
4. Import **RoLexAI**
5. Setări:
   - Framework: `Other`
   - Root Directory: `demo`
6. Deploy

**AȘTEAPTĂ 1-2 MIN** → **COPIAZĂ URL** (ex: `https://ro-lex-ai.vercel.app`)

---

## PASUL 5: Test & Launch (2 min)

1. Deschide URL-ul Vercel
2. Test chat: *"Ce pedepse sunt pentru furt?"*
3. Test upload: încarcă o poză
4. **LANSEAZĂ PE X:**

```
🚀 LANSEZ ROLEXAI - BETA! 🇷🇴

AI-ul care te ajută să înțelegi orice lege din România!

✅ Întreabă despre legi, contracte, acte juridice
✅ Upload & analiză documente (OCR inteligent)
✅ Răspunsuri cu articole exacte din Codul Penal/Civil
✅ Instalabil pe telefon (PWA)

⚠️ Versiune BETA: Prima încărcare ~30-60s (server gratuit)
După aceea răspunde instant!

📱 Testează ACUM GRATUIT:
👉 https://ro-lex-ai.vercel.app

🎯 Caut primii 100 de testeri!
Feedback = access prioritar la versiunea PRO

#RoLexAI #LegalTech #Romania #AI #LegalAI
```

---

## 🎉 GATA!

App-ul tău e LIVE la:
- Backend: `https://rolexai-backend.onrender.com`
- Frontend: `https://ro-lex-ai.vercel.app`

**Total timp: 10 minute**  
**Total cost: 0 RON**

---

## ❓ Probleme?

Citește: **START-HERE.md** (ghid detaliat cu troubleshooting)
