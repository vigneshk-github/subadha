"use client"
import Link from "next/link";
import style from "./style.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <div
      className="relative h-[700px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed h-[400px] w-full bottom-0 text-black bg-white">
        <div className="bg-white py-8 px-12 h-full w-full flex flex-col justify-between">
          <div className={style.email}>
            <Link href="mailto:subadha.co.in@gmail.com">
              subadha.co.in@gmail.com
            </Link>
          </div>
          <div className={style.social}>
            <span>
              <Link
                href="https://x.com/Subadhadev?t=f-3E602Dxd7GwA0lIw7GaQ&s=08"
                target="_blank"
              >
                <XIcon>X(Twitter)</XIcon>
              </Link>
            </span>
            <span>
              <Link href="" target="_blank">
                <InstagramIcon>Instagram</InstagramIcon>
              </Link>
            </span>
            <span>
              <Link href="https://wa.me/message/5D7P4M6VBMYUM1" target="_blank">
                <WhatsAppIcon>Whats App</WhatsAppIcon>
              </Link>
            </span>
            <span>
              <Link
                href="https://www.facebook.com/profile.php?id=61561972772982&mibextid=ZbWKwL"
                target="_blank"
              >
                <FacebookIcon>Facebook</FacebookIcon>
              </Link>
            </span>
          </div>
          <div className={style.copy}>© 2024 Subadha | All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}
