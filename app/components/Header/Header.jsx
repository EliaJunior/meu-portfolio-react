"use client";

import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header id="header" className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <nav className="navbar">
        <a
          href="#"
          className="logo"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          Elias<span>Junior</span>
        </a>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "\u2715" : "\u2630"}
        </button>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="navLinks">
          <li>
            <a href="#sobre" onClick={(e) => handleSmoothScroll(e, "#sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              onClick={(e) => handleSmoothScroll(e, "#projetos")}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={(e) => handleSmoothScroll(e, "#contato")}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
