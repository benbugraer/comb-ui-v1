"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMenuAlt3 } from "react-icons/hi";
import { SiGithub, SiTwitter, SiGmail } from "react-icons/si";

const links = [
  { label: "Home", href: "/" },
  { label: "Usage", href: "/usage" },
  { label: "Recipes", href: "/recipes" },
];

const socialMedia = [
  {
    url: "https://github.com/benbugraer",
    icon: <SiGithub className="w-4 h-4" />,
  },
  {
    url: "https://x.com/benbugraer",
    icon: <SiTwitter className="w-4 h-4" />,
  },
  { url: "mailto:bugraerdev@gmail.com", icon: <SiGmail className="w-4 h-4" /> },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header
      className="bg-white bg-opacity-30  top-0 sticky z-40 w-full backdrop-blur-xl animate-in"
      style={{ "--index": 0 } as CSSProperties}
    >
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="relative uppercase font-black mr-8 flex items-center space-x-2"
        >
          CombUI
        </Link>
        <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium">
          <ul className="hidden md:flex gap-1 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <NavLinks href={link.href}>{link.label}</NavLinks>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex items-center gap-1 justify-end ml-auto">
          {socialMedia.map((social) => (
            <a
              target="_blank"
              key={social.url}
              href={social.url}
              className="inline-flex text-tertiary items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9"
            >
              {social.icon}
            </a>
          ))}
        </nav>
        <div className="relative md:hidden ml-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Menu Button"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary focus:outline-none"
              >
                <HiMenuAlt3 className="h-6 w-6 cursor-pointer text-black" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 origin-top-right mr-4 rounded-xl bg-secondary p-2 text-base shadow-md focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <DropdownMenuRadioGroup asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-md px-4 py-2 transition-colors hover:text-primary ${
                        pathname === link.href ? "bg-tertiary" : "font-normal"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuRadioGroup>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-neutral-200/90"></hr>
    </header>
  );
}
