import Link from "next/link";
import Image from "next/image";
import cat404 from "../public/stuff/404cat.png"

export default function NotFound() {
  return (
    <div className=" flex flex-col items-center justify-center bg-slate-800 min-h-screen">
        <Image width={150} height={150} src={cat404}></Image>
      <h1 className="bg-gradient-to-r from-orange1 to-orange3 text-7xl xl:text-8xl py-2 font-extrabold text-transparent bg-clip-text">
        404
      </h1>
      <h1 className=" text-3xl xl:text-4xl py-2 text-orange3">
        Cat got your page?
      </h1>
      <h2 className=" text-lg xl:text-xl leading-8 text-gray-300 my-4">
        It doesn't exist :(
      </h2>
      <Link href="/" target="">
        <button className="px-4 py-2 rounded-md text-orange2 text-base border border-orange2 hover:bg-orange3 hover:bg-opacity-10 duration-300 cursor-pointer">
        Try Again?
        </button>
      </Link>
    </div>
  );
}
