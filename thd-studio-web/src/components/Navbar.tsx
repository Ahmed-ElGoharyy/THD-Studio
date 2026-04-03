"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`} ref={navRef}>
      <div className={styles.logo}>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMobileMenuOpen(false);
        }}>THD<span> STUDIO</span></a>
      </div>
      
      <div className={`${styles.links} ${mobileMenuOpen ? styles.mobileVisible : ""}`}>
        <a href="#services" onClick={(e) => scrollToSection(e, "services")} className={styles.link}>Services</a>
        <a href="#portfolio" onClick={(e) => scrollToSection(e, "portfolio")} className={styles.link}>Portfolio</a>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")} className={styles.link}>About</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className={styles.link}>Contact</a>
      </div>

      <div className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
}
