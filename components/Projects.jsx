import Image from "next/image";
import thelist from "../public/projects/thelist.jpeg";
import {AiOutlineGithub} from "react-icons/ai";

const Projects = () => {
  return (
    <section id="projects" className=" max-w-container mx-auto lgl:px-20">
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div
          id="proj1"
          className="w-full flex flex-col items-center justify-centergap-28 mt-10 px-10"
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl: justify-center items-end text-right xl:-ml-16 z-10">
              <h3>The list</h3>
              <p className=" bg-slate-500 text-sm md:text-base p-2 md:p-6 rounded-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                fuga eligendi! Deserunt nihil ab praesentium. Tempore architecto
                veritatis in, reprehenderit aliquam consectetur? Deleniti
                provident maiores accusamus. Architecto, quasi. Iusto, impedit.
              </p>
              <ul className="text-ms md:text-sm tracking-wide flex gap-2 md:gp-5 justify-between text-orange2">
                <li>ReactJs</li>
                <li>Firebase</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/notmegg/The-list"
                  className="hover: text-orange3 duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div
          id="proj2"
          className="w-full flex flex-col items-center justify-center gap-28 mt-10 px-10"
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
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl: justify-center items-end text-right  z-10">
              <h3>The list</h3>
              <p className=" bg-slate-500 text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
                fuga eligendi! Deserunt nihil ab praesentium. Tempore architecto
                veritatis in, reprehenderit aliquam consectetur? Deleniti
                provident maiores accusamus. Architecto, quasi. Iusto, impedit.
              </p>
              <ul className="text-ms md:text-sm tracking-wide flex gap-2 md:gp-5 justify-between text-orange2">
                <li>ReactJs</li>
                <li>Firebase</li>
                <li>Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/notmegg/The-list"
                  className="hover: text-orange3 duration-300"
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
