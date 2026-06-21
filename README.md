# 🚀 Sagar's Developer Portfolio

> A premium, animated personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brown?style=for-the-badge&logo=vercel)](https://your-live-url-here.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 🌐 Live URL

> **🔗 [ADD YOUR LIVE URL HERE](https://your-live-url-here.vercel.app)**  
> *(Deploy to Vercel and replace this link)*

---

## ✨ Features

- 🎨 **Warm Brown Theme** — Custom earth-tone design system with light/dark mode
- 🌙 **Dark / Light Mode** — Persisted in `localStorage`, respects system preference
- 🎞️ **Smooth Animations** — Framer Motion scroll-triggered animations throughout
- ⌨️ **Typewriter Effect** — Cycling roles in the hero section
- 📱 **Fully Responsive** — Mobile-first design across all breakpoints
- 🖱️ **Custom Cursor** — Decorative cursor on desktop
- 📄 **Resume Download** — Public download button powered by Google Drive link
- 🔐 **Admin Panel** — Password-protected hidden panel to update resume URL
- 📬 **Contact Form** — EmailJS integration for direct email delivery
- 🥚 **Easter Egg** — Click `v1.0.0` in footer 5 times to open admin panel

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, Vite, JavaScript |
| **Styling** | Tailwind CSS v3, Framer Motion |
| **Icons** | react-icons |
| **Routing** | React Router DOM |
| **Notifications** | react-hot-toast |
| **Email** | EmailJS |
| **Fonts** | Playfair Display, Inter (Google Fonts) |

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png              # Profile photo
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with mobile drawer
│   │   ├── Hero.jsx              # Landing section with typewriter
│   │   ├── About.jsx             # Bio + animated count-up stats
│   │   ├── Skills.jsx            # Tech stack grid with icons
│   │   ├── Experience.jsx        # Animated vertical timeline
│   │   ├── Projects.jsx          # Project cards with live links
│   │   ├── Education.jsx         # Education card
│   │   ├── Resume.jsx            # Resume download section
│   │   ├── Contact.jsx           # Contact form + info cards
│   │   ├── Footer.jsx            # Footer with easter egg
│   │   └── AdminPanel.jsx        # Password-protected admin panel
│   ├── data/
│   │   └── portfolioData.js      # All content in one place
│   ├── hooks/
│   │   └── useScrollDirection.js # Navbar hide/show on scroll
│   ├── App.jsx                   # Router + theme + cursor
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind + global styles
├── .env                          # Your secret env variables (not committed)
├── .env.example                  # Template for env variables
├── tailwind.config.js            # Custom brown palette
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### 1. Clone the Repository

```bash
git clone https://github.com/Saga-2004/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_RESUME_URL=https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
VITE_ADMIN_PASSWORD=your_secure_password
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables Explained

| Variable | Required | Description |
|---|---|---|
| `VITE_RESUME_URL` | ✅ Yes | Google Drive direct download link for resume |
| `VITE_ADMIN_PASSWORD` | ✅ Yes | Password to access the admin panel |
| `VITE_EMAILJS_SERVICE_ID` | ⏳ Optional | EmailJS service ID for contact form |
| `VITE_EMAILJS_TEMPLATE_ID` | ⏳ Optional | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | ⏳ Optional | EmailJS public key |

### How to get Google Drive Resume Link:

1. Upload resume PDF to Google Drive
2. Right-click → **Share** → set to **"Anyone with the link"**
3. Copy link: `https://drive.google.com/file/d/FILE_ID/view`
4. Extract `FILE_ID` and use:
   ```
   VITE_RESUME_URL=https://drive.google.com/uc?export=download&id=FILE_ID
   ```

---

## 🔐 Admin Panel

The admin panel lets you update the resume download URL without redeploying.

### How to Access:

**Method 1 — Direct URL:**
```
http://localhost:5173/admin
```

**Method 2 — Easter Egg:**
Go to the footer → click **`v1.0.0`** text **5 times**

### What you can do in Admin Panel:
- Update the Google Drive resume URL
- Change resume filename and file type (PDF/DOCX)
- Changes are saved to `localStorage` and take effect immediately

> ⚠️ For permanent changes, update `VITE_RESUME_URL` in your deployment environment variables.

---

## 📬 Setting up EmailJS (Contact Form)

1. Sign up free at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** (connect your Gmail)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — message content
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Add them to your `.env` file

---

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub (make sure `.env` is in `.gitignore`)
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Add all `VITE_` environment variables in Vercel project settings
4. Deploy — your portfolio goes live instantly!

> ✅ Make sure `.env` is listed in `.gitignore` — never push secret keys to GitHub!

---

## 📋 Sections Overview

| Section | Description |
|---|---|
| **Hero** | Animated intro with typewriter, social icons, CTA buttons |
| **About** | Bio, quote card, animated count-up stats |
| **Skills** | Tech stack categorized with brand icons and hover effects |
| **Experience** | Animated vertical timeline of internships |
| **Projects** | Cards for LetsEat, GitHub Analyzer, Sales Insight Analyzer |
| **Education** | B.Tech in AI — Gurugram University |
| **Resume** | Download card with file type badge |
| **Contact** | EmailJS form + contact info cards |

---

## 🎯 Featured Projects

### 🍔 LetsEat — Food Delivery Platform
Full-stack food delivery app with 4 role-based portals, JWT auth, Razorpay integration.
**Live:** [lets-eat-rosy.vercel.app](https://lets-eat-rosy.vercel.app)

### 📊 GitHub Profile Analyzer
Analyzes GitHub profiles, computes repo insights, MySQL storage, dark-mode UI.
**Live:** [github-profile-analyzer-pink-nu.vercel.app](https://github-profile-analyzer-pink-nu.vercel.app)

### 🤖 Sales Insight Analyzer
AI-powered transcript analyzer using Google Gemini 2.5 Flash to detect sales signals.
**Live:** [signature-detector-nu.vercel.app](https://signature-detector-nu.vercel.app)

---

## 📞 Contact

**Sagar**
- 📧 Email: [msagars2008@gmail.com](mailto:msagars2008@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/sagar-b4b643283](https://www.linkedin.com/in/sagar-b4b643283/)
- 🐙 GitHub: [github.com/Saga-2004](https://github.com/Saga-2004)

---

## 📄 License

MIT © 2026 Sagar

---

<div align="center">
  <p>Built with ❤️ by <strong>Sagar</strong> | 2026</p>
  <p>
    <a href="https://github.com/Saga-2004">GitHub</a> •
    <a href="https://www.linkedin.com/in/sagar-b4b643283/">LinkedIn</a> •
    <a href="mailto:msagars2008@gmail.com">Email</a>
  </p>
</div>