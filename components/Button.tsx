"use client";

import Link from "next/link";
import {motion} from "framer-motion";
import {ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    href: string;
}

export default function Button({children, href}: ButtonProps) {
    return (
        <motion.button
            className="rounded-xl duration-500 ease-linear transition-colors bg-black hover:bg-tertiary hover:transition-colors hover:duration-500 hover:ease-linear"
            whileHover={{scale: 1.1}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
        >
            <Link
                href={href}
                className="flex items-center py-2 px-2 gap-3 capitalize font-normal prose text-white hover:text-black  duration-500 hover:duration-500 ease-linear"
            >
                {children}
            </Link>
        </motion.button>
    );
}
