# Sparktec Locomotives — Industrial Rail & O&M Platform

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Industrial_Theme-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-FF6C37?style=for-the-badge&logo=emailjs&logoColor=white)

A high-performance, responsive web platform designed for **Sparktec Locomotives**, specializing in heavy industrial locomotive manufacturing, turnkey Operations & Maintenance (O&M), and private rail yard management.

Designed with an **Industrial Steel & Amber** dark aesthetic (`#0D1B2A` / `#E8A020`), the application showcases products, service offerings, sector-specific industry applications, and an interactive contact system with direct email delivery.

---

## 🛠️ Key Features

- **Dynamic Product Showcase**: Categorized list of industrial locomotives, hydraulic shunting units, and reconditioned equipment.
- **Interactive O&M Portal**: Detailed breakdowns of turnkey rail operations, SLA uptime metrics, and a comparison matrix (AMC vs. Turnkey O&M).
- **Sector-Specific Industry Pages**: Customized application details for Steel Plants, Mining, Cement, Ports, Thermal Power, and Refineries.
- **Responsive Navigation Bar**: Custom navigation header with brand identity and active route indicators.
- **Direct Email Inquiries**: Contact form integration via **EmailJS** for instant client RFQ delivery without a backend server.
- **Custom Industrial UI/UX**: Built with custom CSS featuring high-contrast dark tones, technical badges, and responsive layouts.

---

## 🧰 Tech Stack

- **Frontend Framework**: [React.js](https://react.dev/) (Vite)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: Vanilla CSS3 (Flexbox, CSS Grid, Custom CSS Variables)
- **Icons & Typography**: Google Fonts (`Barlow Condensed` & `Inter`)
- **Email Delivery**: [@emailjs/browser](https://www.emailjs.com/)

---

## 📁 Project Structure

```text
sparktec-locomotives/
├── public/
│   └── favicon.ico
├── src/
│   ├── Assets/              # High-resolution images and logos
│   ├── Components/          # Shared components (Navbar, Footer, Layout)
│   ├── Pages/               # Route components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Product.jsx
│   │   ├── Services.jsx
│   │   ├── OMPage.jsx
│   │   ├── Industries.jsx
│   │   └── Contact.jsx
│   ├── Styles/              # Dedicated CSS files per route/component
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── Product.css
│   │   ├── Services.css
│   │   ├── OMPage.css
│   │   ├── Industries.css
│   │   └── Contact.css
│   ├── App.jsx              # Main App wrapper & route setup
│   └── main.jsx             # Entry point
├── index.html
├── package.json
└── README.md