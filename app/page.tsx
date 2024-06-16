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

export default function Home() {
  return (
    <>
      <div className="mx-auto relative max-w-4xl py-28 sm:py-36">
        <div className="text-center">
          <div className="z-10 flex mb-8 items-center justify-center">
            <Particles
              className="absolute inset-0 z-0 pointer-events-none"
              quantity={100}
              ease={80}
              color="#000000"
              refresh
            />
            {/* <DotPattern
              className={cn(
                "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
              )}
            /> */}
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
            Go to the Variants page, find the features you want, download the
            necessary UI libraries and you&apos;re ready, just copy and paste
            them into your project. Remember you can customize it as you like.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="/variants">
              <GrInstall className="w-5 h-5" />
              Installations
            </Button>
            <Button href="/variants">
              <IoDocuments className="w-5 h-5" />
              Get Started
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Dock>
              <DockIcon>
                <Link href="https://www.framer.com/motion/" target="blank">
                  <TbBrandFramerMotion className="w-6 h-6" />
                </Link>
              </DockIcon>
              <DockIcon>
                <SiShadcnui className="w-6 h-6" />
              </DockIcon>
              <DockIcon>
                <SiRadixui className="w-6 h-6" />
              </DockIcon>
              <DockIcon>
                <SiNextui className="w-6 h-6" />
              </DockIcon>
              <DockIcon>
                <FaWandMagicSparkles className="w-6 h-6" />
              </DockIcon>
            </Dock>
          </div>
        </div>
      </div>
    </>
  );
}
