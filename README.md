# ✨ Assignment – Google OAuth Login App

This is a full-stack assignment that demonstrates:
- React frontend with a login modal
- Google OAuth authentication using Passport.js
- Protected profile page (accessible only after login)
- Clean project structure with separate `client` and `server` folders

---

## 📂 Project structure
```
Assignment - Copy/
├─ client/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  │  ├─ LoginModel/
│  │  │  │  └─ LoginModal.js
│  │  │  ├─ Navbar/
│  │  │  │  ├─ Navbar.css
│  │  │  │  └─ Navbar.js
│  │  │  └─ Profile/
│  │  │     └─ Profile.js
│  │  ├─ protectedRoute/
│  │  │  └─ ProtectedRoute.js
│  │  ├─ App.css
│  │  ├─ App.js
│  │  ├─ App.test.js
│  │  ├─ index.css
│  │  ├─ index.js
│  ├─ .env
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  └─ README.md
└─ server/
   ├─ config/
   │  └─ db.js
   ├─ controller/
   │  └─ authController.js
   ├─ middleware/
   │  └─ authenticate.js
   ├─ model/
   │  └─ User.js
   ├─ router/
   │  └─ authRouter.js
   ├─ .env
   ├─ .gitignore
   ├─ index.js
   ├─ package-lock.json
   ├─ package.json
   └─ README.md

```

---

## 🧩 Features

✅ Navbar with login button  
✅ Login modal:
- Enter username & password (placeholder)
- "Sign in with Google" button

✅ Google OAuth flow:
- Click button → redirect to Google login
- Backend authenticates user and issues JWT
- Frontend saves token & shows user details in Navbar

✅ Protected `/profile` page:
- Only accessible if logged in (checked using `ProtectedRoute.js`)

---

## ⚙️ Technologies used

- **Frontend:** React, React Router,Bootstrap
- **Backend:** Node.js, Express, Passport.js (Google OAuth), JWT
- **Database:** MongoDB (Mongoose)
- **Other:** dotenv, cors,Hooks

---

## 🚀 Live Demo

👉 [Click here to see the deployed app!](https://gfmnow-assignment.vercel.app/)
