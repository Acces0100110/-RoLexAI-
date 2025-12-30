# 🔄 Sistem Automat de Actualizare Legislație

## 📋 CE FACE?

RoLexAI acum **descarcă automat** toate legile din România și le actualizează zilnic:

✅ **Codul Penal**  
✅ **Codul Civil**  
✅ **Codul de Procedură Penală**  
✅ **Codul de Procedură Civilă**  
✅ **Codul Muncii**  
✅ **Codul Fiscal**  
✅ **Constituția României**  

---

## 🕐 CUM FUNCȚIONEAZĂ?

### 1. Actualizare Automată (CRON Job)
- **Frecvență**: Zilnic la **02:00 AM**
- **Sursă**: https://legislatie.just.ro (oficial!)
- **Storage**: Fișier JSON local (`backend/data/legislation.json`)

### 2. La Pornire Backend
Când pornești backend-ul:
```
✅ Backend server running on port 5001
🕐 Scheduler legislație pornit!
📅 Program: Zilnic la 02:00 AM
✅ Scheduler activ!
```

### 3. Endpoints Noi

#### **POST /api/update-legislation**
Actualizare manuală instant:
```bash
curl -X POST http://localhost:5001/api/update-legislation
```

Răspuns:
```json
{
  "success": true,
  "message": "Legislația a fost actualizată cu succes!"
}
```

#### **GET /api/legislation-status**
Verifică status-ul legislației:
```bash
curl http://localhost:5001/api/legislation-status
```

Răspuns:
```json
{
  "total": 7,
  "lastUpdate": "2025-12-30T10:30:00.000Z",
  "coduri": [
    { "nume": "Codul Penal", "articole": 446 },
    { "nume": "Codul Civil", "articole": 2.664 },
    ...
  ]
}
```

---

## 🚀 DEPLOYMENT PE RENDER

### Modificări Necesare:

1. **Push pe GitHub**:
```bash
cd c:\Users\Hp\Documents\GitHub\RoLexAI
git add .
git commit -m "Add automatic legislation scraper"
git push
```

2. **Render va redeploy automat** (GitHub sync)

3. **Verifică logs pe Render**:
   - https://dashboard.render.com/
   - Ar trebui să vezi: "Scheduler activ!"

---

## 📱 TESTARE

### Test Local:

1. **Pornește backend**:
```bash
cd backend
node index.js
```

2. **Actualizare manuală**:
```bash
curl -X POST http://localhost:5001/api/update-legislation
```

3. **Verifică status**:
```bash
curl http://localhost:5001/api/legislation-status
```

### Test în Production:

```bash
# Actualizare
curl -X POST https://rolexai.onrender.com/api/update-legislation

# Status
curl https://rolexai.onrender.com/api/legislation-status
```

---

## 🔧 CONFIGURARE AVANSATĂ

### Schimbă frecvența CRON:

În `backend/utils/legislationScheduler.js`, linia 65:

```javascript
// Zilnic la 02:00
cron.schedule('0 2 * * *', taskActualizareLegislatie);

// Schimbă în:
// Săptămânal (Duminică 02:00)
cron.schedule('0 2 * * 0', taskActualizareLegislatie);

// Lunar (ziua 1, ora 02:00)
cron.schedule('0 2 1 * *', taskActualizareLegislatie);

// La fiecare 6 ore
cron.schedule('0 */6 * * *', taskActualizareLegislatie);
```

---

## 💾 STORAGE

### Fișierul `backend/data/legislation.json`:

Structura:
```json
[
  {
    "nume": "Codul Penal",
    "titlu": "CODUL PENAL AL ROMÂNIEI",
    "url": "https://legislatie.just.ro/Public/DetaliiDocument/109855",
    "articole": [
      {
        "articol": "Art. 1",
        "text": "Principiul legalității incriminării..."
      },
      {
        "articol": "Art. 2",
        "text": "Principiul legalității pedepsei..."
      }
    ],
    "dataActualizare": "2025-12-30T10:00:00.000Z",
    "sursa": "legislatie.just.ro"
  }
]
```

### Upgrade la MongoDB (Opțional):

Pentru volume mari de date:
```bash
npm install mongodb
```

Modifică `legislationScheduler.js` să salveze în MongoDB în loc de JSON.

---

## ⚡ FEATURES VIITOARE

### V2 - Căutare Semantică:
```javascript
// În loc să caute doar cuvinte cheie
// Folosește AI pentru a găsi articole relevante
const articoleRelevante = await cautareSemantica(
  "furt", 
  legislatie
);
```

### V3 - Versioning:
```json
{
  "Codul Penal": {
    "current": {...},
    "history": [
      { "version": "2024-01-01", "articole": [...] },
      { "version": "2023-06-15", "articole": [...] }
    ]
  }
}
```

### V4 - Notificări:
```javascript
// Email când se modifică o lege
if (articolModificat) {
  sendEmail({
    to: subscribers,
    subject: "Codul Penal - Art. 188 modificat!",
    body: diferențe
  });
}
```

---

## 🆘 TROUBLESHOOTING

### 1. **Scheduler nu pornește**

Verifică logs:
```bash
# Local
node index.js

# Production (Render)
https://dashboard.render.com/ → Logs
```

Ar trebui să vezi:
```
🕐 Scheduler legislație pornit!
```

### 2. **Scraping eșuează**

Posibile cauze:
- Site-ul legislatie.just.ro e offline
- Structura HTML s-a schimbat
- Timeout (servere lente)

Fix:
```javascript
// În legislatieActualizata.js
timeout: 60000 // Crește timeout-ul la 60s
```

### 3. **Fișier legislation.json lipsește**

Normal! Se creează la prima actualizare:
```bash
curl -X POST http://localhost:5001/api/update-legislation
```

### 4. **Render oprește scheduler-ul**

**Problemă**: Free tier Render se oprește după 15 min inactivitate → scheduler se oprește.

**Soluție 1** - Ping automat cu cron-job.org:
1. https://cron-job.org → Sign up
2. Create job:
   - URL: `https://rolexai.onrender.com/api/legislation-status`
   - Schedule: Every 10 minutes

**Soluție 2** - Upgrade la Render Starter ($7/lună) → 24/7 uptime

---

## ✅ VERIFICARE FINALĂ

Checklist deployment:

- [ ] `npm install node-cron` rulat
- [ ] Fișiere noi create: `legislatieActualizata.js`, `legislationScheduler.js`
- [ ] `index.js` modificat (endpoints noi)
- [ ] Git push făcut
- [ ] Render redeploy automat
- [ ] Logs verificate pe Render
- [ ] Test endpoint: `curl https://rolexai.onrender.com/api/legislation-status`
- [ ] Actualizare manuală: `curl -X POST https://rolexai.onrender.com/api/update-legislation`

---

**NEXT STEP**: Push pe GitHub și verifică că totul funcționează pe Render! 🚀
