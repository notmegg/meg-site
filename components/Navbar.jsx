import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-slate-800">
      <div className="w-full h-full mx-auto py-1 flex items-center justify-between">
        <div>
          <h1 className="ml-10 text-lg text-orange-500">LOGO</h1>
        </div>
        <div className="hidden mdl:inline-flex items-center gap-7 mdl:mr-10">
          <ul className="flex gap-7 text-sm font-light">
            <Link
              href="#header"
              className="flex items-center gap-1 text-white hover:text-orange2 cursor-pointer duration-300 nav-link"
            >
              <li>HOME</li>
            </Link>
            <Link
              href="#skills"
              className="flex items-center gap-1 text-white hover:text-orange2 cursor-pointer duration-300 nav-link"
            >
              <li>SKILLS</li>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 text-white hover:text-orange2 cursor-pointer duration-300 nav-link"
            >
              <li>PROJECTS</li>
            </Link>
          </ul>
          <a href="" target="_blank">
            <button className="px-4 py-2 rounded-md text-orange2 text-sm border border-orange2 hover:bg-orange3 hover:bg-opacity-10 duration-300 cursor-pointer">
              RESUME
            </button>
          </a>
        </div>
        {/* Hamburger icon */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-orange1 cursor-pointer overflow-hidden group mr-7">
          <span className="w-full h-[2px] bg-orange1 inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-orange1 inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-orange1 inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
