"use client";

import { SiReact, SiTailwindcss } from "react-icons/si";
import { FaWandMagic } from "react-icons/fa6";
import AceternityLogo from "@/public/icon/AceternityLogo";

import { DockWithPreview } from "@/components/ui/DockWithPreview";
import { TbBrandFramerMotion } from "react-icons/tb";

const DockPreview = () => {
  const dockItems = [
    { url: "https://ui.aceternity.com/", icon: AceternityLogo },
    { url: "https://magicui.design/", icon: FaWandMagic },
    { url: "https://www.framer.com/motion/", icon: TbBrandFramerMotion },
    { url: "https://reactjs.org/", icon: SiReact },
    { url: "https://tailwindcss.com/", icon: SiTailwindcss },
  ];

  return (
    <div className="not-prose h-[25rem] relative my-12 gap-4 -ml-6 flex w-[calc(100%+48px)] max-w-none select-none items-center justify-center overflow-clip border-secondary bg-secondary p-6 md:-ml-20 md:w-[calc(100%+160px)] md:rounded-lg md:border animate-in">
      <div className="flex items-center justify-center mx-auto gap-4">
        {/*{dockItems.map(({ url, icon: Icon }) => (*/}
        {/*  <LinkPreview url={url} key={url}>*/}
        {/*    <Dock>*/}
        {/*      <DockIcon>*/}
        {/*        <Icon className="w-5 h-5" />*/}
        {/*      </DockIcon>*/}
        {/*    </Dock>*/}
        {/*  </LinkPreview>*/}
        {/*))}*/}
        {dockItems.map(({ url, icon: Icon }) => (
          <DockWithPreview url={url} key={url}>
            <Icon className="w-5 h-5" />
          </DockWithPreview>
        ))}
      </div>
    </div>
  );
};

export default DockPreview;
