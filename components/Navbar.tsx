"use client";

import boldallyLogo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn("w-full", {
        "fixed z-50 top-0": isScrolled,
      })}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl w-full flex items-center justify-between h-20 duration-500 transition-[max-width,padding,backdrop-filter,background] relative",
          {
            "max-w-5xl backdrop-blur-lg bg-white/10 border border-border rounded-full px-6 mt-6":
              isScrolled,
          }
        )}
      >
        <Link href="/">
          <Image src={boldallyLogo} alt="Boldally Logo" height={50} />
        </Link>

        <nav className="flex items-center gap-10">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm hover:text-primary font-semibold"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <Button
          asChild
          variant="outline"
          className={cn({
            "rounded-full": isScrolled,
          })}
        >
          <Link href="/contact">Get a Free Quote</Link>
        </Button>
      </div>
    </header>
  );
}
