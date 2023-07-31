import { TbBrandPython, TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
import { BiLogoJava } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FiFigma, FiGithub } from "react-icons/fi";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className=" bg-gradient-to-r from-orange2 to-orange3 text-3xl xl:text-3xl py-2 font-bold text-transparent bg-clip-text mt-40 text-center mb-16">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 text-5xl  text-orange2 place-items-center px-10">
        <div className="hover:text-orange3 duration-300">
          <TbBrandPython />
          <span className=" text-sm text-slate-300">Python</span>
        </div>
        <div className="hover:text-orange3 duration-300">
          <BiLogoJava />
          <span className=" text-sm text-slate-300">Java</span>
        </div>
        <div className="hover:text-orange3 duration-300">
          <TbBrandHtml5 />
          <span className=" text-sm text-slate-300">HTML</span>
        </div>
        <div className="hover:text-orange3 duration-300">
          <TbBrandCss3 />
          <span className=" text-sm text-slate-300">CSS</span>
        </div>
        <div className="hover:text-orange3 duration-300">
          <DiJavascript1 />
          <span className=" text-sm text-slate-300">JavaScript</span>
        </div>
        <div className="hover:text-orange3 duration-300">
          <FiGithub />
          <span className=" text-sm text-slate-300">Github</span>
        </div>
        <div className="hover:text-orange3 duration-300">
          <FiFigma />
          <span className=" text-sm text-slate-300">Figma</span>
        </div>
      </div>
    </div>
  );
};
export default Skills;
