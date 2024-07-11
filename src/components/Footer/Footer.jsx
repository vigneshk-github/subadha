"use client";
import Link from "next/link";
import style from "./style.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <>
      <footer
        className={`text-white text-lg font-bold footer bg-base-200 p-10 ${style.footer}`}
      >
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="hover:underline" href="#team">
            About us
          </a>
          <a className="hover:underline" href="#contactus">
            Contact Us
          </a>
        </nav>
        <nav>
          <h6 className="footer-title pt-10">Design</h6>
          <Link href="/">Brand Identity</Link>
          <Link href="/">Web Design</Link>
          <Link href="/">Marketing</Link>
        </nav>
        <nav>
          <h6 className="no-underline footer-title">Legal</h6>
          <Link href="/">Terms of use</Link>
          <Link href="/">Privacy policy</Link>
        </nav>
      </footer>
      <footer
        className={`footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4 ${style.footerBottom}`}
      >
        <nav className="md:place-self-center md:justify-self-end">
          <div className={`grid grid-flow-col gap-4 ${style.socialLinks}`}>
            <span>
              <Link
                href="mailto:subadha.co.in@gmail.com"
                target="_blank"
                className="flex items-center gap-2 hover:text-red-700 transition"
              >
                <EmailIcon /> Email
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
                href="https://x.com/Subadhadev?t=f-3E602Dxd7GwA0lIw7GaQ&s=08"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <XIcon /> Twitter
              </Link>
            </span>
            <span>
              <Link
                href="https://www.instagram.com/subadha.co.in?igsh=dGg5NGVsYzU2Nnps"
                target="_blank"
                className="flex items-center gap-2 hover:text-pink-500 transition"
              >
                <InstagramIcon /> Instagram
              </Link>
            </span>
          </div>
        </nav>
        <aside className="grid-flow-col items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Subadha Services
            <br />© 2024 Subadha | All Rights Reserved
          </p>
        </aside>
      </footer>
    </>
  );
}
