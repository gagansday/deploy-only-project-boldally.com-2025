import boldallyLogo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className="w-7xl mx-auto h-20 flex items-center justify-between">
      <Link href="/">
        <Image src={boldallyLogo} alt="Boldally Logo" height={50} />
      </Link>

      <div className="flex items-center gap-10">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-sm hover:text-primary font-semibold"
          >
            {link.title}
          </Link>
        ))}
      </div>

      <Button asChild variant="outline">
        <Link href="/contact">Get a Free Quote</Link>
      </Button>
    </div>
  );
}
