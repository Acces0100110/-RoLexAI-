# RoLexAI - Merged Web Application

🎉 **The app has been successfully merged!**

## What Changed

The mobile app (React Native) and demo web app have been merged into a **unified React web application** located in `frontend/web/`.

### New Structure:
```
frontend/web/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── screens/
        ├── ChatScreen.jsx
        ├── ChatScreen.css
        ├── LoginScreen.jsx
        ├── LoginScreen.css
        ├── HomeScreen.jsx
        └── HomeScreen.css
```

## Features

✅ **All demo features integrated:**
- Beautiful gradient UI
- File upload support
- Quick question buttons
- Sidebar with examples
- Responsive design

✅ **Mobile app screens converted:**
- Login screen
- Home screen  
- Chat screen with full AI functionality

✅ **Modern tech stack:**
- React 18
- React Router for navigation
- Vite for fast development
- Clean component architecture

## How to Run

### Quick Start
```bash
start-web-app.bat
```

### Manual Start
```bash
cd frontend/web
npm install
npm run dev
```

The app will open automatically at `http://localhost:3000`

## Backend

Make sure the backend is running:
```bash
start-backend.bat
```

Or manually:
```bash
cd backend
npm install
node index.js
```

## Routes

- `/` - Redirects to chat (or login if not authenticated)
- `/login` - Login screen (can skip for demo)
- `/home` - Feature showcase
- `/chat` - Main chat interface with AI

## What's Next

The original files remain unchanged:
- `demo/index.html` - Original demo (still works)
- `frontend/` - React Native mobile app (still works)

You can now focus development on `frontend/web/` for the unified web experience!

---

Made with ⚖️ by RoLexAI
