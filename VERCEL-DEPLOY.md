# 🚀 Deploy RoLexAI pe Vercel

## Pasul 1: Instalează Vercel CLI (opțional)
```bash
npm install -g vercel
```

## Pasul 2: Deploy prin Web Interface (CEL MAI SIMPLU)

### A. Conectează GitHub la Vercel:
1. Mergi pe **https://vercel.com**
2. Click **"Sign Up"** cu GitHub
3. Click **"Add New Project"**
4. Selectează repository-ul **RoLexAI**
5. Configurează:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend/web`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

### B. Adaugă Environment Variables:
În Vercel dashboard:
1. Click pe proiect → **Settings** → **Environment Variables**
2. Adaugă:
   - `VITE_API_URL` = `https://rolexai.onrender.com/api`

3. Click **"Deploy"**

## Pasul 3: Backend pe Render (GRATUIT)

Backend-ul nu poate rula pe Vercel (nu suportă Express long-running). Folosește Render:

1. Mergi pe **https://render.com**
2. Click **"New Web Service"**
3. Conectează GitHub repo **RoLexAI**
4. Configurează:
   - **Name:** rolexai-backend
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Plan:** Free

5. Environment Variables pe Render:
   - `GROQ_API_KEY` = `your_groq_api_key_here`
   - `PORT` = `5001`

6. Click **"Create Web Service"**

7. Copiază URL-ul (ex: `https://rolexai-backend.onrender.com`)

## Pasul 4: Actualizează URL Backend în Frontend

După ce ai URL-ul de la Render, actualizează în Vercel:
- Mergi la **Settings** → **Environment Variables**
- Schimbă `VITE_API_URL` cu noul URL de la Render
- Click **"Redeploy"**

## Alternativ: Deploy prin CLI

```bash
# Din root project
cd frontend/web
vercel --prod
```

## Verificare

După deploy:
- ✅ Frontend: **https://ro-lex-ai.vercel.app**
- ✅ Backend: **https://rolexai-backend.onrender.com**
- ✅ Test: Deschide frontend și încearcă un mesaj

## Notă despre Backend GRATUIT pe Render:
- Se oprește după 15 minute de inactivitate
- Primul request după pauză durează ~30 secunde (cold start)
- Pentru producție, upgrade la plan plătit ($7/lună)

---

**Gata!** Aplicația ta va fi live pe Vercel! 🎉
