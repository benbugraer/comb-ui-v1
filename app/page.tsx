import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { CSSProperties } from "react";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import { GrInstall } from "react-icons/gr";
import { IoDocuments } from "react-icons/io5";
import { Dock, DockIcon } from "@/components/ui/dock";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiShadcnui,
  SiRadixui,
  SiNextui,
  SiHeadlessui,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaWandMagicSparkles } from "react-icons/fa6";
import GridPattern from "@/components/ui/grid-pattern";
import { LinkPreview } from "@/components/ui/link-preview";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import AceternityLogo from "@/components/AceternityLogo";

export default function Home() {
  const dockIcons = [
    { href: "https://nextjs.org/", icon: SiNextdotjs },
    { href: "https://react.dev/", icon: SiReact },
    { href: "https://ui.shadcn.com/", icon: SiShadcnui },
    { href: "https://tailwindcss.com/", icon: SiTailwindcss },
    { href: "https://ui.aceternity.com/", icon: AceternityLogo },
    { href: "https://www.framer.com/motion/", icon: TbBrandFramerMotion },
    { href: "https://magicui.design/", icon: FaWandMagicSparkles },
  ];

  return (
    <>
      <div className="mx-auto relative max-w-4xl py-[3.25rem] sm:py-[6.1rem] sm:w-1/2 lg:w-3/5 flex-col">
        <div className="text-center">
          <GridPattern
            width={45}
            height={45}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]"
            )}
          />
          <Link
            href="https://github.com/benbugraer"
            target="_blank"
            className="z-10 inline-block mb-[3.3rem] -mt-0.5 items-center justify-center animate-in"
            style={{ "--index": 1 } as CSSProperties}
          >
            <AnimatedGradientText>
              <span
                className={cn(
                  `inline animate-gradient font-light bg-gradient-to-r from-[#111] via-[#ccc] to-[#111] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Created By{" "}
                <span className=" uppercase font-bold">bugra er</span>
              </span>
              <IoMdArrowRoundForward className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>
          <h1
            className="text-4xl font-light tracking-tight sm:text-5xl animate-in"
            style={{ "--index": 2 } as CSSProperties}
          >
            Would you like to take your projects to the next level? Solution is
            CombUI
          </h1>
          <p
            className="mt-6 text-lg leading-8 text-tertiary animate-in"
            style={{ "--index": 3 } as CSSProperties}
          >
            Go to the Variants page, find the features you want, install the
            necessary UI libraries and you&apos;re ready, just copy and paste
            them into your project. Remember you can customize it as you like.
          </p>
          <div
            className="mt-10 flex items-center justify-center gap-x-6 animate-in"
            style={{ "--index": 4 } as CSSProperties}
          >
            <Button href="/usage">
              <GrInstall className="w-5 h-5" />
              Installations
            </Button>
            <Button href="/variants">
              <IoDocuments className="w-5 h-5" />
              Get Started
            </Button>
          </div>
          <div
            className="mt-24 sm:flex grid grid-rows-2 grid-flow-col gap-4 relative items-center justify-center animate-in"
            style={{ "--index": 5 } as CSSProperties}
          >
            {dockIcons.map(({ href, icon: Icon }) => (
              <LinkPreview key={href} url={href}>
                <Dock>
                  <DockIcon>
                    <Icon aria-label="icons" className="w-5 h-5 " />
                  </DockIcon>
                </Dock>
              </LinkPreview>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
