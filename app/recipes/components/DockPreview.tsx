import { SiReact, SiNextdotjs, SiTailwindcss, SiGithub } from "react-icons/si";
import { Dock, DockIcon } from "@/components/ui/dock";

export default function DockPreview() {
  const dockItems = [
    { url: "https://reactjs.org/", icon: SiReact },
    { url: "https://nextjs.org/", icon: SiNextdotjs },
    { url: "https://tailwindcss.com/", icon: SiTailwindcss },
    { url: "https://github.com/", icon: SiGithub },
  ];

  return (
    <div className="flex items-center justify-center mx-auto gap-4 mt-64">
      {dockItems.map(({ url, icon: Icon }) => (
        <Dock key={url}>
          <DockIcon>
            <Icon className="w-5 h-5" />
          </DockIcon>
        </Dock>
      ))}
    </div>
  );
}
