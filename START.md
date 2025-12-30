# 🚀 Pornire RoLexAI

## 1️⃣ Backend (Node.js/Express)

```powershell
# Terminal 1 - Backend
cd c:\Users\Hp\Documents\GitHub\RoLexAI\backend
node index.js
```

✅ Server backend va rula pe: **http://localhost:5001**

### Endpoints disponibile:
- `POST /api/chat` - Chat cu AI (Groq GPT)
- `POST /api/upload` - Upload documente legale
- `GET /api/legisro` - Legi de pe legis.ro
- `GET /api/nlex` - Legi de pe n-lex.europa.eu
- `/api/auth` - Autentificare Google/Apple

## 2️⃣ Frontend (React Native/Expo)

```powershell
# Terminal 2 - Frontend
cd c:\Users\Hp\Documents\GitHub\RoLexAI\frontend
npx expo start
```

### Opțiuni rulare:
- Apasă `a` pentru Android emulator
- Apasă `i` pentru iOS simulator
- Apasă `w` pentru web browser
- Scanează QR code cu Expo Go app

## 🧪 Testare API

### Test Chat AI:
```powershell
Invoke-RestMethod -Uri http://localhost:5001/api/chat -Method Post -ContentType "application/json" -Body '{"messages":[{"role":"user","content":"Ce este OUG?"}]}'
```

### Test Legis.ro:
```powershell
Invoke-RestMethod -Uri http://localhost:5001/api/legisro -Method Get
```

### Test N-Lex:
```powershell
Invoke-RestMethod -Uri http://localhost:5001/api/nlex -Method Get
```

## ⚙️ Configurare .env

Editează `backend/.env`:
```env
PORT=5001
GROQ_API_KEY=your_actual_api_key_here
```

## 📱 Structura Ecrane

- **HomeScreen** - Pagina principală
- **ChatScreen** - Chat AI pentru întrebări juridice
- **LoginScreen** - Autentificare utilizatori

## 🔧 Probleme comune

**Backend nu pornește?**
```powershell
cd backend
npm install
node index.js
```

**Frontend eroare?**
```powershell
cd frontend  
npm install
npx expo start --clear
```

**Port deja folosit?**
- Schimbă PORT în `.env`
- Sau oprește procesul: `Stop-Process -Name node -Force`
