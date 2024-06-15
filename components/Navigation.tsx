"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import NavLinks from "./ui/NavLinks";
import { CSSProperties } from "react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiMenuAlt3 } from "react-icons/hi";

const links = [
  { label: "Home", href: "/" },
  { label: "Usage", href: "/usage" },
  { label: "Variants", href: "/variants" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  return (
    <header className="md:mt-3">
      <nav
        className="mx-auto flex max-w-[60rem] items-center justify-between gap-3 px-4 py-3 md:px-6 animate-in-reverse"
        style={{ "--index": 0 } as CSSProperties}
      >
        <Link href="/" className="font-light capitalize text-lg">
          CombUI
        </Link>
        <ul className="hidden md:flex gap-1 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <NavLinks href={link.href}>{link.label}</NavLinks>
            </li>
          ))}
        </ul>

        <div className="relative md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="icon"
                className="flex h-8 w-8 items-center justify-center rounded-lg focus:outline-none after:focus:outline-none"
              >
                <HiMenuAlt3 className="h-6 w-6 cursor-pointer text-black" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 origin-top-right mr-4 rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <DropdownMenuRadioGroup asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-md px-4 py-2 transition-colors hover:text-primary ${
                        pathname === link.href
                          ? "bg-secondary font-medium"
                          : "font-normal"
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
      </nav>
    </header>
  );
}
