<div align="center">
  <h1>Apna.co React Clone</h1>
  <p>A pixel-perfect, fully responsive clone of the Apna.co web platform, meticulously crafted with React.js and Tailwind CSS.</p>

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
</div>

<hr/>

## ✨ Key Features

- **Pixel-Perfect UI:** Exact matches for typography, color palettes (`#127b6c` teal), layout structures, and micro-interactions.
- **Fully Responsive:** Mobile-first Tailwind implementation ensuring flawless displays across mobile, tablet, and desktop viewports.
- **Dynamic Content Routing:** Client-side routing with `react-router-dom` handling complex views and navigation states.
- **Rich Interactive Components:**
  - Complex multi-column hover dropdowns.
  - Interactive "Read More" accordions.
  - Sticky/Fixed call-to-action behaviors based on scroll position and device type.

## 📱 Implemented Pages

1. **Job Details Page (`/jobs/:id`)**: The core job viewing experience with dynamic sticky headers, robust job descriptions, company stats, and horizontal-scrolling "Similar Jobs" recommendations.
2. **Employer Login (`/employer-login`)**: A stunning login portal featuring dynamic gradients, AI branding, and a specialized form layout.
3. **Job Prep (`/job-prep`)**: A dedicated interview preparation landing page featuring a complex 3D CSS card carousel mockup.
4. **Contests (`/contests`)**: A 3-column responsive dashboard for browsing live AI voice contests and tracking applications.

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Data:** Local JSON mocked APIs

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Local Development

1. **Clone the repository (if you haven't already):**
   ```bash
   git clone https://github.com/prajwalpr4/ApnaClone_OriginEdge.git
   cd "clone task-2/clone"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🌐 Deployment (Netlify)

This project is optimized for deployment on [Netlify](https://www.netlify.com/). Since this is a React Single Page Application (SPA) utilizing React Router, Netlify requires a specific configuration to handle client-side routing correctly.

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. Push your code to your GitHub repository.
2. Log in to your [Netlify Dashboard](https://app.netlify.com/) and click **"Add new site"** -> **"Import an existing project"**.
3. Connect your GitHub account and select the `ApnaClone_OriginEdge` repository.
4. Configure the build settings:
   - **Base directory:** `clone` *(Only needed if your React code is inside a subfolder, otherwise leave blank)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. **CRITICAL STEP FOR REACT ROUTER:** To prevent `404 Page Not Found` errors when refreshing routes (like `/contests`), you must add a `_redirects` file to your `public` folder containing `/* /index.html 200`. 
   > **Note: I have already created this `_redirects` file for you in the `public` directory, so Netlify routing will work out-of-the-box!**
6. Click **Deploy site**.

### Option 2: Deploy via Netlify CLI

1. Install the Netlify CLI globally:
   ```bash
   npm install netlify-cli -g
   ```
2. Build the project locally:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder:
   ```bash
   netlify deploy --prod --dir=dist
   ```

---

<div align="center">
  <i>Built as a clone project. Not affiliated with Apna.co.</i>
</div>
