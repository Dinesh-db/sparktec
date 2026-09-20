import { useState } from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Product", path: "/product" },
  { name: "Services", path: "/services" },
  { name: "OM", path: "/om" },
  { name: "Industries", path: "/industries" },
  { name: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img 
            src="/logo.svg" 
            alt="Sparktec Logo" 
            className="navbar-logo-img" 
          />
          <div className="logo-text">
            <span>SPARKTEC</span>
            <small>LOCOMOTIVES</small>
          </div>
        </Link>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;