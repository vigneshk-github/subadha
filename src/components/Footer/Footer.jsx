import Link from "next/link";
import style from "./style.module.css";

export default function Footer() {
  return (
    <div
      className="relative h-[400px]"
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
                X(Twitter)
              </Link>
            </span>
            <span>
              <Link href="" target="_blank">
                Instagram
              </Link>
            </span>
            <span>
              <Link href="https://wa.me/message/5D7P4M6VBMYUM1" target="_blank">
                Whats Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
