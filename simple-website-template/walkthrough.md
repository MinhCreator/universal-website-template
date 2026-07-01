# Project Walkthrough - AstraCore Full-Stack

I have successfully built a full-stack web application featuring a modern, premium design system. The application integrates a Vite-powered React frontend with an Express.js backend.

## 🚀 Getting Started

To launch the entire stack (both frontend and backend), run the following command in the root directory:

```bash
npm run dev
```

- **Frontend**: [http://localhost:5173](http://localhost:5173) (Standard Vite port)
- **Backend API**: [http://localhost:5000/api/data](http://localhost:5000/api/data)

## 🛠 Features Implemented

### 1. High-Aesthetic Frontend
- **Glassmorphism**: The navbar and cards use backdrop filters and subtle borders for a frosted glass effect.
- **Dynamic Gradients**: Custom radial gradients and text-clipping gradients for a "Future Tech" look.
- **Modern Typography**: Integrated "Inter" for body text and "Outfit" for headings via Google Fonts.
- **Responsive Design**: Tailored for both desktop and mobile viewing.

### 2. Robust Express Backend
- **CORS Enabled**: Configured to allow requests from the Vite dev server.
- **API Endpoint**: `/api/data` provides dynamic content for the "Core Infrastructure" section.
- **Nodemon Integration**: Automatically restarts the server on changes.

### 3. Integrated Tooling
- **Concurrently**: Orchestrates running both servers with a single command.
- **Tailwind CSS**: Utility-first styling with custom theme extensions.

## 📂 Project Structure

- `client/`: React source code, Tailwind configuration, and Vite build tools.
- `server/`: Express application logic and middleware.
- `package.json`: Root orchestration and shared scripts.

## ✅ Verification
- [x] Backend responding with JSON data.
- [x] Frontend successfully fetching and displaying backend data (with loading skeletons).
- [x] Tailwind CSS processing directives correctly.
- [x] Aesthetic goals (glassmorphism, gradients) achieved.

> [!TIP]
> You can modify the `server/index.js` file to add more features, and the UI will update dynamically if you use the `npm run dev` script!
