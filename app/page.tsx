import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { IoMdArrowRoundForward } from "react-icons/io";
import clsx from "clsx";
import Link from "next/link";
import { CSSProperties } from "react";
import Particles from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern";
import Button from "@/components/Button";
import { GrInstall } from "react-icons/gr";
import { IoDocuments } from "react-icons/io5";
import { Dock, DockIcon } from "@/components/ui/dock";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiShadcnui, SiRadixui, SiNextui } from "react-icons/si";
import { FaWandMagicSparkles } from "react-icons/fa6";
import GridPattern from "@/components/ui/grid-pattern";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
  const dockIcons = [
    { href: "https://www.framer.com/motion/", icon: TbBrandFramerMotion },
    { href: "https://magicui.design/", icon: FaWandMagicSparkles },
    { href: "https://ui.shadcn.com/", icon: SiShadcnui },
    { href: "https://www.radix-ui.com/", icon: SiRadixui },
    { href: "https://nextui.org/", icon: SiNextui },
  ];

  return (
    <>
      <div className="mx-auto relative max-w-4xl py-28 sm:py-36 sm:w-1/2 lg:w-3/5 flex-col">
        <div className="text-center">
          <div className="z-10 flex mb-8 items-center justify-center">
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
            <div
              className="animate-in"
              style={{ "--index": 1 } as CSSProperties}
            >
              <div
                className={clsx(
                  "group rounded-lg border border-primary bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 animate-in"
                )}
                style={{ "--index": 1 } as CSSProperties}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <Link
                    target="blank"
                    href="https://github.com/benbugraer"
                    className="font-light text-sm"
                  >
                    Created By{" "}
                    <span className="font-bold uppercase">bugra er</span>
                  </Link>
                  <IoMdArrowRoundForward className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
          </div>
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
            className="mt-10 flex-row items-center justify-center animate-in"
            style={{ "--index": 5 } as CSSProperties}
          >
            <Dock>
              {dockIcons.map(({ href, icon: Icon }, index) => (
                <DockIcon key={index}>
                  {href ? (
                    <LinkPreview url={href}>
                      <Icon className="w-6 h-6" />
                    </LinkPreview>
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </DockIcon>
              ))}
            </Dock>
          </div>
        </div>
      </div>
    </>
  );
}
