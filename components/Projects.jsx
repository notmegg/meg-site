import Image from "next/image";
import thelist from "../public/projects/thelist.jpeg";
import fyi from "../public/projects/fyi.jpg";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Link from "next/link";

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
              <p className=" bg-slate-500 bg-opacity-50 text-sm md:text-base p-2 md:p-6 rounded-md text-gray-300 tracking-wide">
                Discover. Organise. Repeat.<br/>
                The Movies and TV Series Cataloging Application is a comprehensive website designed to cater to the needs of movie and TV enthusiasts. Its primary purpose is to offer users a user-friendly platform for organizing and managing their favorite movies and TV shows in a list-like system. The List provides users with an efficient and enjoyable way to organize and discover their favorite entertainment content.
              </p>
              <ul className="text-sm md:text-base tracking-wide flex gap-2 md:gap-7 justify-between text-orange2">
                <li className="hover:text-orange3 duration-300">ReactJs</li>
                <li className="hover:text-orange3 duration-300">Firebase</li>
                <li className="hover:text-orange3 duration-300">Netlify</li>
              </ul>
              <div className="text-2xl flex gap-4 text-orange-200">
                <Link
                  href="https://github.com/notmegg/The-list"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  href="https://the-list-app.netlify.app/"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineLink />
                </Link>
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
              <p className=" bg-slate-500 bg-opacity-50 text-sm md:text-base p-2 md:p-6 rounded-md text-gray-300 tracking-wide">
                Plan. Organize. Coordinate. <br/>
                Managing college life and making the best out of it is lost on many college students. Resources, although abundant, still need to be handpicked. A student companion app is just another messaging app that does not really filter necessary content that the student wants to see. Our app streamlines content by gauging the student's inferior capabilities and surveying their interests. It allows the user to look at content relevant to them in various fields, which is and will be taking place in the academia.
              </p>
              <ul className="text-sm md:text-base tracking-wide flex gap-2 md:gap-7 justify-between text-orange2 ">
                <li className="hover:text-orange3 duration-300">Flutter</li>
                <li className="hover:text-orange3 duration-300">Figma</li>
                <li className="hover:text-orange3 duration-300">Firestore</li>
              </ul>
              <div className="text-2xl flex gap-4 text-orange-200">
                <Link
                  href="https://github.com/AGJ-web/FYI"
                  className="hover:text-orange2 duration-300 hover:translate-y-2 transition-all"
                >
                  <AiOutlineGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
