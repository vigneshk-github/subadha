"use client";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import style from "./style.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      id="footer"
      className="relative h-auto bg-gray-800 text-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="h-full w-full py-12 px-6 sm:px-12 flex flex-col justify-between items-center">
        <div className={style.email}>
          <Link href="mailto:subadha.co.in@gmail.com">
            subadha.co.in@gmail.com
          </Link>
        </div>
        <div
          className={style.social + " flex flex-wrap justify-center gap-8 mb-8"}
        >
          <span>
            <Link
              href="https://x.com/Subadhadev?t=f-3E602Dxd7GwA0lIw7GaQ&s=08"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-500 transition"
            >
              <XIcon /> Twitter
            </Link>
          </span>
          <span>
            <Link
              href=""
              target="_blank"
              className="flex items-center gap-2 hover:text-pink-500 transition"
            >
              <InstagramIcon /> Instagram
            </Link>
          </span>
          <span>
            <Link
              href="https://wa.me/message/5D7P4M6VBMYUM1"
              target="_blank"
              className="flex items-center gap-2 hover:text-green-500 transition"
            >
              <WhatsAppIcon /> WhatsApp
            </Link>
          </span>
          <span>
            <Link
              href="https://www.facebook.com/profile.php?id=61561972772982&mibextid=ZbWKwL"
              target="_blank"
              className="flex items-center gap-2 hover:text-blue-700 transition"
            >
              <FacebookIcon /> Facebook
            </Link>
          </span>
        </div>
        <a
          onClick={scrollToTop}
          className="cursor-pointer text-lg hover:underline mb-8"
        >
          To the top!
        </a>
        <div className={style.copy + " text-center"}>
          © 2024 Subadha | All Rights Reserved
        </div>
      </div>
    </div>
  );
}
