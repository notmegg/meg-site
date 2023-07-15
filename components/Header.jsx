import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import meg_pic from "../public/stuff/meg_pic.jpg";

const Header = () => {
  return (
    <div
      id="header"
      className="flex flex-col mt-20  xl:mt-28 xl:flex-row w-full h-full"
    >
      <div className=" w-full text-center px-10 xl:w-1/2 xl:text-left xl:pl-28 text-white">
        <h3 className=" text-xl xl:text-2xl py-2">Hi,</h3>
        <h1 className=" bg-gradient-to-r from-orange1 to-orange3 text-4xl xl:text-5xl py-2 font-extrabold text-transparent bg-clip-text overflow-hidden whitespace-nowrap animate-typing">
          I'm Meghana
        </h1>
        <h3 className=" text-2xl xl:text-3xl py-2 text-orange3">Blah blah</h3>
        <p className=" text-base xl:text-lg leading-8 text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsa, qui nostrum id provident recusandae quisquam? Aliquid
          perferendis labore, consequatur quam nihil praesentium aliquam. Illum
          dignissimos repellendus asperiores eum magni.
        </p>
        <div className=" text-2xl flex justify-center xl:justify-start gap-14 xl:pl-20 xl:gap-24 text-orange-200 mt-10">
          <a
            className=" w-12 h-9 rounded-full hover:text-orange2 hover:translate-y-2 transition-all duration-300"
            href="meghanaps.contact@gmail.com"
            target="_blank"
          >
            <MdOutlineEmail />
          </a>
          <a
            className=" w-12 h-9 rounded-full hover:text-orange2 hover:translate-y-2 transition-all duration-300"
            href="https://www.linkedin.com/in/meghapshetty/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            className=" w-12 h-9 rounded-full hover:text-orange2 hover:translate-y-2 transition-all duration-300"
            href="https://github.com/notmegg"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>

      <div className=" xl:w-1/2 flex justify-center ">
        <Image
          className=" h-80 w-80 rounded-2xl xl:rounded-full xl:h-80 xl:w-80 border-4 xl:border-8 border-orange-400 xl:ml-32 xl:mt-10 mt-16"
          src={meg_pic}
        />
      </div>
    </div>
  );
};
export default Header;
