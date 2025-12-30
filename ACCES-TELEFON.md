# 📱 Cum să accesezi RoLexAI pe telefon

## Metoda 1: Web App (CEL MAI SIMPLU) ✅

### Pas 1: Pornește serverele
Rulează în 3 terminale separate:

**Terminal 1 - Backend:**
```bash
cd c:\Users\Hp\Documents\GitHub\RoLexAI\backend
node index.js
```

**Terminal 2 - Web Server pentru telefon:**
```bash
cd c:\Users\Hp\Documents\GitHub\RoLexAI\demo
node server.js
```

SAU dublu-click pe: `start-web-mobile.bat`

### Pas 2: Află IP-ul computerului
Rulează în PowerShell:
```powershell
ipconfig
```

Caută linia **IPv4 Address** (de exemplu: `192.168.1.100`)

### Pas 3: Pe telefon
1. **Asigură-te că telefonul e pe ACEEAȘI REȚEA WiFi ca PC-ul**
2. Deschide browser pe telefon (Chrome/Safari)
3. Introdu adresa:
   ```
   http://[IP-UL-TAU]:3000
   ```
   Exemplu: `http://192.168.1.100:3000`

### Pas 4 (Important): Backend trebuie accesibil
Editează `demo/index.html` și schimbă:
```javascript
const API_URL = 'http://localhost:5001/api/chat';
```
în:
```javascript
const API_URL = 'http://[IP-UL-TAU]:5001/api/chat';
```

---

## Metoda 2: Expo Go App (Pentru aplicația nativă)

### Instalează Expo Go
- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **iOS**: [App Store](https://apps.apple.com/app/expo-go/id982107779)

### Pornește Expo
```bash
cd c:\Users\Hp\Documents\GitHub\RoLexAI\frontend
npx expo start
```

### Scanează QR Code
- Când Expo pornește, va afișa un QR code în terminal
- Deschide **Expo Go** pe telefon
- Scanează codul QR
- Aplicația se va deschide pe telefon!

---

## Metoda 3: Partajare Ngrok (De oriunde în lume) 🌍

### Instalează Ngrok
```bash
choco install ngrok
```
SAU descarcă de pe: https://ngrok.com/download

### Pornește tunnel
```bash
ngrok http 3000
```

Va genera un link public gen: `https://abc123.ngrok.io`
Acesta funcționează de pe ORICE telefon, ORIUNDE!

---

## 🔥 Quick Start (1 minut)

1. Dublu-click: `start-backend.bat`
2. Dublu-click: `start-web-mobile.bat`
3. Rulează `ipconfig` în CMD
4. Notează IP-ul (ex: 192.168.1.100)
5. Pe telefon: `http://192.168.1.100:3000`

**GATA!** 🎉

---

## 🐛 Troubleshooting

**Nu pot accesa de pe telefon?**
- ✅ Verifică că ești pe aceeași WiFi
- ✅ Dezactivează firewall-ul temporar
- ✅ Backend rulează pe 5001
- ✅ Web server rulează pe 3000

**Eroare la chat?**
- Modifică IP-ul în `demo/index.html` la linia `API_URL`
- Sau adaugă CORS headers în backend pentru IP-ul mobil

**Expo nu pornește?**
- Șterge `node_modules`: `rm -rf node_modules`
- Reinstalează: `npm install`
- Încearcă: `npx expo start --clear`
