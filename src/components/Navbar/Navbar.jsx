import Link from "next/link";
import React from "react";
import style from "./style.module.css"; // Make sure to import your CSS module

const Navbar = () => {
  return (
    <header className={`${style.navbar} ${style.stickyNavbar}`}>
      <nav
        className={`flex items-center gap-12 mx-4 py-6 px-10 text-2xl font-bold ${style.navLinks}`}
      >
        <Link href="#home" scroll={true} className={style.smoothscroll}>
          HOME
        </Link>
        <Link href="#projects" scroll={true} className={style.smoothscroll}>
          PROJECTS
        </Link>
        <Link href="#service" scroll={true} className={style.smoothscroll}>
          SERVICES
        </Link>
        <Link
          href="#testimonial"
          scroll={true}
          className={style.smoothscroll}
        >
          TESTIMONIALS
        </Link>
        <Link href="#price" scroll={true} className={style.smoothscroll}>
          PRICE
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
