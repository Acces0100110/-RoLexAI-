# 🤖 Setup RoLexAI Telegram Bot - Ghid Rapid

## Pas 1: Creează Botul (2 minute)

1. **Deschide Telegram** și caută: `@BotFather`

2. **Trimite comanda:** `/newbot`

3. **BotFather întreabă:**
   ```
   Alright, a new bot. How are we going to call it? 
   Please choose a name for your bot.
   ```
   **Răspunde:** `RoLexAI Assistant`

4. **BotFather întreabă:**
   ```
   Good. Now let's choose a username for your bot. 
   It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.
   ```
   **Răspunde:** `RoLexAI_bot` (sau orice nume disponibil care se termină cu `_bot`)

5. **Primești TOKEN-ul:**
   ```
   Done! Congratulations on your new bot. You will find it at t.me/RoLexAI_bot
   
   Use this token to access the HTTP API:
   1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```
   
   **⚠️ IMPORTANT: Copiază acest token!**

---

## Pas 2: Configurează Botul

1. **Editează fișierul `.env`:**
   ```
   Deschide: c:\Users\Hp\Documents\GitHub\RoLexAI\backend\.env
   ```

2. **Adaugă token-ul:**
   ```env
   TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

3. **Salvează fișierul**

---

## Pas 3: Pornește Botul

### Metoda 1: Dublu-click
```
Dublu-click pe: start-telegram-bot.bat
```

### Metoda 2: Terminal
```bash
cd c:\Users\Hp\Documents\GitHub\RoLexAI\backend
node telegram-bot.js
```

**✅ Vei vedea:**
```
========================================
🤖 RoLexAI Telegram Bot pornit!
========================================
✅ Botul așteaptă mesaje...
📱 Caută botul pe Telegram și începe să îl folosești!
========================================
```

---

## Pas 4: Testează Botul

1. **Deschide Telegram**
2. **Caută:** `@RoLexAI_bot` (sau username-ul tău)
3. **Apasă:** `START`
4. **Întreabă ceva:** "Ce este o OUG?"

---

## 🎨 Personalizare Bot (Opțional)

### Setează descriere

În chat cu @BotFather:

```
/setdescription
@RoLexAI_bot
```

Apoi trimite:
```
🇷🇴 Asistent juridic AI pentru legislația română. 
Întreabă-mă orice despre legi, OUG-uri și Codul Penal!
```

### Setează comenzi

```
/setcommands
@RoLexAI_bot
```

Apoi trimite:
```
start - Pornește botul
help - Ajutor și ghid
examples - Exemple de întrebări
clear - Șterge conversația
```

### Setează avatar

```
/setuserpic
@RoLexAI_bot
```

Apoi uploadează o poză (ex: logo RoLexAI)

---

## 🚀 Deploy Bot (Pentru non-stop)

### Opțiunea 1: PM2 (Windows/Local)

```bash
# Instalează PM2
npm install -g pm2

# Pornește bot cu PM2
cd backend
pm2 start telegram-bot.js --name "RoLexAI-Bot"

# Verifică status
pm2 status

# Logs
pm2 logs RoLexAI-Bot

# Oprește
pm2 stop RoLexAI-Bot
```

### Opțiunea 2: Railway

1. Mergi pe [railway.app](https://railway.app)
2. New Project
3. Deploy from GitHub repo
4. Setează `telegram-bot.js` ca entry point
5. Adaugă Environment Variables:
   - `TELEGRAM_BOT_TOKEN`
   - `BACKEND_URL`
   - `GROQ_API_KEY`

### Opțiunea 3: Render

1. Mergi pe [render.com](https://render.com)
2. New > Background Worker
3. Connect GitHub repo
4. Build Command: `npm install`
5. Start Command: `node telegram-bot.js`
6. Adaugă Environment Variables

---

## 🐛 Troubleshooting

### Bot nu răspunde?

**Verifică:**
1. ✅ Backend-ul rulează pe port 5001
2. ✅ TOKEN-ul e corect în .env
3. ✅ telegram-bot.js rulează
4. ✅ Nu ai erori în terminal

**Soluție:**
```bash
# Repornește backend
cd backend
node index.js

# În alt terminal, pornește bot
node telegram-bot.js
```

### Eroare "401 Unauthorized"?

**Cauză:** Token incorect

**Soluție:**
1. Verifică token-ul în .env
2. Asigură-te că nu ai spații în plus
3. Token-ul trebuie să fie exact ca cel de la BotFather

### Bot nu găsește backend?

**Cauză:** BACKEND_URL incorect

**Soluție în .env:**
```env
# Pentru local
BACKEND_URL=http://localhost:5001

# Pentru production
BACKEND_URL=https://your-app.railway.app
```

---

## 📝 Comenzi Disponibile

După ce botul pornește, utilizatorii pot folosi:

- `/start` - Mesaj de bun venit
- `/help` - Ghid de utilizare
- `/examples` - Exemple de întrebări
- `/clear` - Resetează conversația

**Plus** orice întrebare text despre legislație!

---

## 🎯 Best Practices

1. **Păstrează token-ul SECRET** - Nu-l pune pe GitHub!
2. **Testează local** înainte de deploy
3. **Monitorizează logs** pentru erori
4. **Rate limiting** - Groq are limite pe API
5. **Backup conversații** (opțional)

---

## 🔗 Link-uri Utile

- [Telegram Bot API Docs](https://core.telegram.org/bots/api)
- [Telegraf Documentation](https://telegraf.js.org/)
- [BotFather Commands](https://core.telegram.org/bots#botfather)

---

**✅ Gata! Botul tău Telegram RoLexAI e live!** 🎉

Pentru promovare, vezi [DEPLOY-GUIDE.md](DEPLOY-GUIDE.md#social-media--promovare)
