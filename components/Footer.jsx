import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="contact" className="w-full h-full shadow-contactShadow">
      <div className="p-7 mdl:px-20 mdl:py-10 flex justify-between">
        <div className=" flex flex-col gap-2">
          <h1 className=" text-orange1 text-lg mdl:text-xl font-semibold">M E G H A N A</h1>
          <h1 className=" text-orange3 text-xs mdl:text-sm font-light">Fueled by Choccy Milk :D <br /></h1>
        </div>
        <div className=" items-center justify-center align-middle">
        <div className=" text-lg mdl:text-2xl flex gap-7 text-orange3 py-5">
                <Link
                  className="hover:text-orange2 hover:translate-y-2 transition-all duration-300"
                  href="mailto:meghanaps.contact@gmail.com"
                  target="_blank"
                >
                  <MdOutlineEmail />
                </Link>
                <Link
                  className=" hover:text-orange2 hover:translate-y-2 transition-all duration-300"
                  href="https://www.linkedin.com/in/meghapshetty/"
                  target="_blank"
                >
                  <AiOutlineLinkedin />
                </Link>
                <Link
                  className=" hover:text-orange2 hover:translate-y-2 transition-all duration-300"
                  href="https://github.com/notmegg"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
