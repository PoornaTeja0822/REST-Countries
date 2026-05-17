# 🌍 Countries React App

A modern React + Vite application that fetches and displays real-time country data from the REST Countries API.
Users can browse, search, and filter countries by region — all with a clean, responsive design and light/dark mode support.

## 🔗 Live Demo
[Live Demo]() 

## 📂 Project Structure
```
rest-countries/
├── public/               # Static assets (e.g., images)
├── src/
│   ├── assets/           # Image & icon files
│   ├── components/       # Reusable UI components
│   ├── layout/           # Layout-level components (Navbar, etc.)
│   ├── page/             # Page-level components (Home, Details, etc.)
│   ├── services/         # API and helper functions
│   ├── App.jsx           # Root component managing routes & layout
│   ├── index.css         # Global styles (Tailwind CSS)
│   ├── main.jsx          # Application entry point
├── .env                  # Environment variables
├── .gitignore            # Files ignored by Git
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML file
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🧰 Technologies Used
- **⚛️ React.js** — UI library for building interactive interfaces.
- **⚡ Vite** — Lightning-fast frontend tooling.
- **🎨 Tailwind CSS** — Utility-first CSS framework for rapid styling.
- **🌐 REST Countries API** — Provides live data about countries.
- **🧭 React Router DOM** — Handles navigation and routing.
- **🔄 Custom Error & Loading Components** — For smooth user experience.

## 📱 Responsive Design
The app is fully responsive, designed with a mobile-first approach:
- Grid & Flexbox layouts ensure smooth scaling.
- Media queries adapt layouts across devices.
- Dark & Light themes switch seamlessly using Tailwind’s dark class.

## ✨ Features
- **✅ Live API Data** — Fetches real-time information for all countries.
- **🔍 Search Functionality** — Instantly search countries by name.
- **🌎 Filter by Region** — Quickly filter countries based on their continent.
- **📊 Detailed Country View** — Displays flags, capitals, populations, currencies, and more.
- **🌙 Dark/Light Mode** — Toggle theme with a single click.
- **⚙️ Error Handling** — Gracefully manages API or route failures.
- **🚀 Fast Navigation** — Powered by React Router & Vite for instant transitions.

## 🛠️ Installation & Setup
Follow these steps to set up and run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://gitlab.com/PoornaTeja0822/REST-Countries.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd rest-countries
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a .env file at the project root and add:**
    ```
    VITE_COUNTRIES_API=https://restcountries.com/v3.1/all
    VITE_COUNTRY_API=https://restcountries.com/v3.1/alpha
    ```
5. **Start the development server**
   ```bash
   npm run dev
   ```
6. **Open the app in your browser**
   - The app will run on `http://localhost:5173/` (or the port assigned by Vite).

## 🚀 Deployment
This project is deployed on **Vercel** for continuous delivery and automatic builds.
You can deploy your own version by linking the repo to Vercel — it auto-detects the Vite configuration.

## 🧩 Additional Components
- **PageNotFound.jsx** — Displays when an invalid route is accessed.
- **ErrorFallBack.jsx** — Catches unexpected runtime or routing errors to prevent crashes.
(Displays a friendly message like “Something went wrong. Please refresh the page.”)

## 🏆 Author
💼 Passionate about React, JavaScript, and clean web experiences.

Developed by **Poorna Teja P**
