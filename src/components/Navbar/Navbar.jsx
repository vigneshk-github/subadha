import Link from "next/link";
import React from "react";
import style from "./style.module.css"; 
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={style.navbar}>
      <div className={style.navbarBackground}></div>
      <nav
        className={`flex items-center gap-12 mx-4 py-6 px-10 text-2xl font-bold ${style.navLinks}`}
      >
      <Image src="/images/logo1.jpg" width={100} height={100}/>
        <Link href="/" scroll={true} className={style.smoothscroll}>
          Home
        </Link>
        <Link href="#projects" scroll={true} className={style.smoothscroll}>
          Projects
        </Link>
        <Link href="#service" scroll={true} className={style.smoothscroll}>
          Services
        </Link>
        <Link href="#testimonial" scroll={true} className={style.smoothscroll}>
          Testimonials
        </Link>
        <Link href="#contactus" scroll={true} className={style.smoothscroll}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
