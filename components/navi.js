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
         <div className="flex  flex-row justify-between items-center p-[10px]">
      <Link href="/"><Image src="/logot.png" width="100" height="100" alt="logo"></Image></Link>
      <div className="flex items-center justify-end z-10">
        <button onClick={() => handleNav()}><Image src="/navi.png" width="80" height="80" alt="logo"></Image></button>
      </div>
      <div className={state ? "top-0 left-0 right-0 absolute h-screen w-screen flex flex-col justify-center items-center bg-white ease-in duration-300" : "top-0 left-[-100%] right-0 ease-in duration-300 absolute h-screen w-screen flex flex-col justify-center items-center bg-white"}>
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