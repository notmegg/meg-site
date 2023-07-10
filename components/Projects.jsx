import Image from "next/image";
import thelist from "../public/projects/thelist.jpeg";
import {AiOutlineGithub,AiOutlineLink} from "react-icons/ai";

const Projects = () => {
  return (
    <section id="projects" className=" w-full lgl:px-20">
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-48 pb-20">
        {/* Project 1 */}
        <div
          id="proj1"
          className="w-full flex flex-col items-center justify-center gap-28 mt-10 px-20"
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://the-list-app.netlify.app/"
            >
              <div>
                <Image
                  className="h-full object-contain rounded-lg"
                  src={thelist}
                  alt="the list"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center items-end text-right z-10">
              <h1 className="text-2xl font-bold text-white">The list</h1>
              <p className=" bg-slate-500 bg-opacity-50 text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                fuga eligendi! Deserunt nihil ab praesentium. Tempore architecto
                veritatis in, reprehenderit aliquam consectetur? Deleniti
                provident maiores accusamus. Architecto, quasi. Iusto, impedit.
              </p>
              <ul className="text-sm md:text-base tracking-wide flex gap-2 md:gap-7 justify-between text-orange2">
                <li>ReactJs</li>
                <li>Firebase</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4 text-orange-200">
                <a
                  href="https://github.com/notmegg/The-list"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  href="https://the-list-app.netlify.app/"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineLink />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div
          id="proj1"
          className="w-full flex flex-col items-center justify-center gap-20 xl:gap-28 mt-10 px-20"
        >
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://the-list-app.netlify.app/"
            >
              <div>
                <Image
                  className="h-full object-contain rounded-lg"
                  src={thelist}
                  alt="the list"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center items-start text-left z-10">
              <h1 className="text-2xl font-bold text-white">The list</h1>
              <p className=" bg-slate-500 bg-opacity-50 text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                fuga eligendi! Deserunt nihil ab praesentium. Tempore architecto
                veritatis in, reprehenderit aliquam consectetur? Deleniti
                provident maiores accusamus. Architecto, quasi. Iusto, impedit.
              </p>
              <ul className="text-sm md:text-base tracking-wide flex gap-2 md:gap-7 justify-between text-orange2">
                <li>ReactJs</li>
                <li>Firebase</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4 text-orange-200">
                <a
                  href="https://github.com/notmegg/The-list"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  href="https://the-list-app.netlify.app/"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
