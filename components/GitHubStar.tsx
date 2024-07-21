import { SiGithub } from "react-icons/si";
import { FaStar } from "react-icons/fa";

export default function GitHubStar() {
  return (
    <>
      <a
        href="https://github.com/benbugraer/comb-ui"
        target="blank"
        className="items-center mr-6 text-sm font-medium border border-tertiary disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:shadow-md hover:bg-tertiary hover:duration-500 duration-500  h-10 px-8 py-4 hidden max-w-56 overflow-hidden whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-lg  transition-all ease-out hover:transition-colors hover:ease-soft-spring"
      >
        <div className="flex gap-2 items-center">
          <SiGithub className="w-4 h-4" />
          <span className="ml-1">Star on GitHub</span>
        </div>
        <div className="ml-2 justify-center text-center items-center gap-2 text-sm md:flex">
          <FaStar className="size-4 text-gray-500 transition-all duration-500 group-hover:text-yellow-300" />
          <span className="inline-block  font-display font-medium text-black dark:text-white">
            0{" "}
          </span>
        </div>
      </a>
    </>
  );
}
