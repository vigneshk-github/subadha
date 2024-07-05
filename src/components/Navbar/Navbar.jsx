import Link from "next/link";
import style from "./style.module.css"

const routes = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "CONTACT US",
    href: "/contact",
  },
  ,
  {
    name: "SERVICES",
    href: "",
  },
  {
    name: "BOOK",
    href: "",
  },
];

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <nav className="flex items-center gap-12 py-8 px-6 text-xl">
        {routes.map((route) => (
          <Link
            className="cursor-pointer navlink"
            key={route.href}
            href={route.href}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
