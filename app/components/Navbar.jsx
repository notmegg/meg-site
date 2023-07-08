const Navbar = () => {
  return (
    <div className=" py-10 pl-10 mb-10 flex justify-between">
      <h1 className=" text-lg">LOGO</h1>
      <ul className=" text-white flex items-center">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>
          <a
            className=" bg-orange-300 text-black px-4 py-2 rounded-2xl ml-8"
            href="#"
          >
            RESUME
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
