import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import meg_pic from "../public/images/meg_pic.jpg";

const Header = () => {
  return (
    <div id="header" className="flex w-full h-full">
      <div className=" w-1/2 text-left pl-28 mt-16 text-white">
        <h3 className=" text-2xl py-2">Hi,</h3>
        <h1 className=" bg-gradient-to-r from-orange1 to-orange3 text-6xl py-2 font-extrabold text-transparent bg-clip-text">
          I'm Meghana
        </h1>
        <h3 className=" text-3xl py-2 text-orange3">Blah blah</h3>
        <p className=" text-lg leading-8 text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsa, qui nostrum id provident recusandae quisquam? Aliquid
          perferendis labore, consequatur quam nihil praesentium aliquam. Illum
          dignissimos repellendus asperiores eum magni.
        </p>
        <div className=" text-2xl flex pl-20 gap-24 text-orange-200 mt-10">
          <span
            className=" w-12 h-9
           rounded-full hover:text-orange2 hover:translate-y-2 transition-all duration-300"
          >
            <MdOutlineEmail />
          </span>
          <span
            className=" w-12 h-9
           rounded-full hover:text-orange2 hover:translate-y-2 transition-all duration-300"
          >
            <AiOutlineLinkedin />
          </span>
          <span
            className=" w-12 h-9
           rounded-full hover:text-orange2 hover:translate-y-2 transition-all duration-300"
          >
            <AiOutlineGithub />
          </span>
        </div>
      </div>

      <div className=" w-1/2 relative flex justify-center m-10">
        <Image
          className="rounded-full h-80 w-80 border-8 border-orange-400 ml-32 mt-14"
          src={meg_pic}
        />
      </div>
    </div>
  );
};
export default Header;
