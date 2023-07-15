import Image from "next/image";
import thelist from "../public/projects/thelist.jpeg";
import fyi from "../public/projects/fyi.jpg";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <section id="projects" className=" w-full lgl:px-20">
      <h1 className=" bg-gradient-to-r from-orange2 to-orange3 text-3xl xl:text-3xl py-2 font-bold text-transparent bg-clip-text mt-40 text-center mdl:mb-20">
        Projects I've worked on
      </h1>
      <div className="w-full flex flex-col items-center justify-between gap-16 xl:gap-28  pb-20">
        {/* Project 1 */}
        <div
          id="proj1"
          className="w-full flex flex-col items-center justify-center gap-28 mt-9 px-5 xl:px-20"
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
                <Image
                  className="h-full object-contain rounded-lg"
                  src={thelist}
                  alt="the list"
                />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center items-end text-right z-10">
              <h1 className="text-2xl font-bold text-white">The List</h1>
              <p className=" bg-slate-500 bg-opacity-50 text-sm md:text-base p-2 md:p-6 rounded-md text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                fuga eligendi! Deserunt nihil ab praesentium. Tempore architecto
                veritatis in, reprehenderit aliquam consectetur? Deleniti
                provident maiores accusamus. Architecto, quasi. Iusto, impedit.
              </p>
              <ul className="text-sm md:text-base tracking-wide flex gap-2 md:gap-7 justify-between text-orange2">
                <li className="hover:text-orange3 duration-300">ReactJs</li>
                <li className="hover:text-orange3 duration-300">Firebase</li>
                <li className="hover:text-orange3 duration-300">Netlify</li>
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
          id="proj2"
          className="w-full flex flex-col items-center justify-center gap-20 xl:gap-28 mt-10 px-5 xl:px-20"
        >
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
              <Image
                className="h-full object-contain rounded-lg"
                src={fyi}
                alt="fyi"
              />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-center items-start text-left z-10">
              <h1 className="text-2xl font-bold text-white">FYI.</h1>
              <p className=" bg-slate-500 bg-opacity-50 text-sm md:text-base p-2 md:p-6 rounded-md text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                fuga eligendi! Deserunt nihil ab praesentium. Tempore architecto
                veritatis in, reprehenderit aliquam consectetur? Deleniti
                provident maiores accusamus. Architecto, quasi. Iusto, impedit.
              </p>
              <ul className="text-sm md:text-base tracking-wide flex gap-2 md:gap-7 justify-between text-orange2 ">
                <li className="hover:text-orange3 duration-300">Flutter</li>
                <li className="hover:text-orange3 duration-300">Figma</li>
                <li className="hover:text-orange3 duration-300">Firestore</li>
              </ul>
              <div className="text-2xl flex gap-4 text-orange-200">
                <a
                  href="https://github.com/AGJ-web/FYI"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineGithub />
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
