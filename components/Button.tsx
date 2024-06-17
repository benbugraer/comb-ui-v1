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
      className="bg-black rounded-lg duration-[350ms] ease-linear transition-colors hover:bg-tertiary  hover:transition-colors hover:duration-[350ms] hover:ease-linear"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={href}
        className="flex items-center py-2 px-2 gap-3 capitalize text-white font-normal prose hover:text-black duration-[400ms] hover:duration-[400ms] ease-linear"
      >
        {children}
      </Link>
    </motion.button>
  );
}
