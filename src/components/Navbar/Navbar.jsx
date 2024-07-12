"use client"
import Link from "next/link";
import React, { useState } from "react";
import styles from "./style.module.css"; // Import CSS module
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarBackground}></div>
      <nav className={styles.navLinks}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo1.jpg"
            alt="Logo"
            className={styles.logo}
            width={50}
            height={50}
          />
        </div>
        <div
          className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
        </div>
        <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
          <Link
            href="/"
            scroll={true}
            className={styles.smoothscroll}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="#projects"
            scroll={true}
            className={styles.smoothscroll}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            href="#service"
            scroll={true}
            className={styles.smoothscroll}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="#testimonial"
            scroll={true}
            className={styles.smoothscroll}
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link
            href="#contactus"
            scroll={true}
            className={styles.smoothscroll}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
