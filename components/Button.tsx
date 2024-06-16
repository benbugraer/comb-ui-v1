"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
};

export default function Button({ children, href }: ButtonProps) {
  return (
    <motion.button
      className="bg-tertiary  rounded-lg"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={href}
        className="flex items-center py-2 px-2 gap-3 capitalize font-normal prose"
      >
        {children}
      </Link>
    </motion.button>
  );
}
