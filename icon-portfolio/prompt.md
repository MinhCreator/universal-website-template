# Modern Developer Portfolio Website Prompt

Create a **modern, professional, responsive Developer Portfolio Website** using the following technology stack:

### Tech Stack

* Vite
* ReactJS (JSX)
* Tailwind CSS
* Material UI (MUI)
* Lucide React Icons
* React Router DOM
* Framer Motion (for smooth animations)
* React Type Animation (optional)
* Context API for theme management

---

## Design Requirements

Create a portfolio that looks like a premium SaaS landing page mixed with a modern developer portfolio.

Design style:

* Clean and minimal
* Modern glassmorphism effects
* Smooth animations
* Professional typography
* Dark/Light mode
* Mobile-first responsive design
* Elegant gradients
* Soft shadows
* Accessible UI
* Fast loading

Use:

* TailwindCSS for layouts
* Material UI for advanced components
* Lucide Icons for all icons

---

## Theme System

Implement a theme switcher:

### Light Theme

* White background
* Gray cards
* Indigo primary color

### Dark Theme

* Dark background (#0F172A)
* Glass cards
* Cyan/Blue accent

Requirements:

* Toggle button in navbar
* Save theme in localStorage
* Theme persists after refresh
* Smooth transition between themes

---

## Website Sections

### 1. Hero Section

Include:

* Professional avatar/photo
* Name
* Role title

Example:

```
John Doe
Full Stack Developer
Java • Spring Boot • React • Cloud
```

Features:

* Typewriter animation
* Animated background
* CTA buttons

Buttons:

* Download Resume
* Contact Me

---

### 2. About Me

Include:

* Developer introduction
* Career summary
* Personal story
* Current focus

Display:

* Years of experience
* Projects completed
* Technologies learned

Use responsive cards.

---

### 3. Skills Section

Create categorized skills:

#### Frontend

* React
* Next.js
* Tailwind
* Material UI
* JavaScript

#### Backend

* Java
* Spring Boot
* Node.js
* Express

#### Database

* MySQL
* PostgreSQL
* MongoDB

#### DevOps

* Docker
* Linux
* Nginx
* GitHub Actions

Features:

* Animated progress bars
* Skill cards
* Hover effects

---

### 4. Projects Section

Create beautiful project cards.

Each card contains:

* Project image
* Title
* Description
* Technologies
* GitHub link
* Live demo link

Card features:

* Hover animation
* Glass effect
* Responsive grid

Example projects:

1. Chat Application
2. E-Commerce Platform
3. Task Management System
4. AI Assistant Platform

---

### 5. Experience Timeline

Create a vertical timeline:

* Company
* Position
* Duration
* Description

Include:

* Internship
* Junior Developer
* Senior Developer

Smooth scroll animations.

---

### 6. Education Section

Display:

* University
* Degree
* Graduation year
* Certifications

Material UI Cards.

---

### 7. Services Section

Show services offered:

* Web Development
* Backend APIs
* Database Design
* UI/UX Development
* Cloud Deployment

Use animated icon cards.

---

### 8. Statistics Section

Display animated counters:

* Years Experience
* Projects Completed
* Happy Clients
* Technologies Mastered

Use count-up animation.

---

### 9. Testimonials

Create testimonial carousel.

Each testimonial:

* Avatar
* Name
* Position
* Review

Modern card design.

---

### 10. Contact Section

Professional contact form:

Fields:

* Name
* Email
* Subject
* Message

Validation:

* Required fields
* Email validation

Additional contacts:

* Email
* GitHub
* LinkedIn
* Facebook
* Telegram

Use Lucide icons.

---

### 11. Footer

Include:

* Logo
* Quick links
* Social links
* Copyright

---

## Navigation Bar

Sticky navbar.

Features:

* Smooth scrolling
* Mobile menu
* Active section highlighting
* Theme toggle
* Resume button

Sections:

```
Home
About
Skills
Projects
Experience
Services
Contact
```

---

## Animations

Use Framer Motion.

Implement:

* Fade-in sections
* Slide animations
* Hover animations
* Card lift effect
* Page transitions
* Scroll reveal animations

---

## Performance

Requirements:

* Lazy loading
* Code splitting
* Optimized images
* Lighthouse score above 90
* SEO-friendly structure

---

## Folder Structure

```plaintext
src/
├── assets/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Experience/
│   ├── Services/
│   ├── Testimonials/
│   ├── Contact/
│   └── Footer/
├── pages/
├── hooks/
├── context/
│   └── ThemeContext.jsx
├── layouts/
├── routes/
├── data/
├── utils/
├── App.jsx
└── main.jsx
```

---

## Additional Features

Implement:

* Scroll-to-top button
* Loading screen
* Animated cursor effects
* Particle background
* GitHub contribution section
* Blog preview section
* Project filtering by technology
* Search projects
* Resume PDF download
* Multi-language ready architecture
* PWA support

---

## Deliverables

Generate:

1. Complete ReactJS project structure
2. Tailwind CSS configuration
3. Material UI integration
4. Theme Context implementation
5. Responsive layouts
6. Reusable components
7. Clean and maintainable code
8. Modern UI/UX matching 2026 portfolio standards
9. Production-ready codebase
10. Detailed setup instructions for Vite development environment

The final result should feel comparable to portfolios from top-tier developers and modern SaaS companies, with exceptional responsiveness, accessibility, animations, and polished visual design.
