import Image from "next/image";
import Link from "next/link"
import { useState } from "react";

export default function Navi () {
    const [state, setState] = useState(0);
  const handleNav = () => {
    setState(!state);
  }
    return (
        <>
         <div className="flex flex-row justify-between items-center p-[10px]">
      <Link href="/"><p className="ml-[25px] text-2xl md:text-3xl p-[10px] text-white font-bold">{'Nomico Labs'}</p></Link>
      <div className="flex items-center justify-start z-10">
        <button className="p-[25px] bg-slate-950 rounded-full" onClick={() => handleNav()}><Image src="/whiteNav.jpeg" width="50" height="50" alt="logo"></Image></button>
      </div>
      <div className={state ? "top-0 left-0 right-0 absolute h-screen w-screen flex flex-col justify-center items-center bg-white ease-in duration-300 text-black" : "top-0 left-[-100%] right-0 ease-in duration-300 absolute h-screen w-screen flex flex-col justify-center items-center bg-white text-black"}>
        <Link className="text-4xl md:text-6xl p-[10px] my-[10px] md:my-[20px]" href="/">
          HOME
        </Link>
        <Link className="text-4xl md:text-6xl p-[10px] my-[10px] md:my-[20px]" href="/projects">
          PROJECTS
        </Link>
        <Link className="text-4xl md:text-6xl p-[10px] my-[10px] md:my-[20px]" href="/mission">
          MISSION
        </Link>
        </div> 
    </div>
        </>
    );
}