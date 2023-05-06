import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Wrong () {
    const [state, setState] = useState(0);

    const handleNav = () => {
    setState(!state);
    }
    return (
        <>
            <div className="flex flex-col h-screen w-screen">
            <div className="hidden md:flex flex-row justify-between items-start items-center">
      <div className="ml-[30px]">
        <Link href="/">
        <Image src="/logot.png" width="100" height="100" alt="logo" className="justify-start h-[100px] w-[100px]"></Image>
        </Link>
      </div>
      <div className="flex flex-row justify-end mr-[100px]">
      <div className="mx-[15px]">
        <Link href="/" className="p-[15px] text-xl">HOME</Link>
      </div>
      <div className="mx-[15px]">
        <Link href="/proje" className="p-[15px] text-xl">PROJECTS</Link>
      </div>
      <div className="mx-[15px]">
        <Link href="/about" className="p-[15px] text-xl">ABOUT</Link>
      </div>
      </div>
    </div>
    <div className="flex md:hidden flex-row justify-between items-start p-[10px]">
      <Image src="/logot.png" width="70" height="70" alt="logo"></Image>
      <div className="flex sm:hidden items-center justify-end z-10">
        <button onClick={() => handleNav()}><Image src="/navi.png" width="50" height="50" alt="logo"></Image></button>
      </div>
      <div className={state ? "sm:hidden top-0 left-0 right-0  absolute h-screen w-screen flex flex-col justify-center items-center bg-white ease-in duration-300" : "sm:hidden top-0 left-[-100%] right-0 ease-in duration-300 absolute h-screen w-screen flex flex-col justify-center items-center bg-white"}>
        <Link className="text-4xl p-[10px] m-[10px]" href="/">
          HOME
        </Link>
        <Link className="text-4xl p-[10px] m-[10px]" href="/proje">
          PROJECTS
        </Link>
        <Link className="text-4xl p-[10px] m-[10px]" href="/about">
          ABOUT
        </Link>
        </div> 
    </div>
    <div className="flex flex-row justify-center items-center h-5/6">
        <p className="text-3xl md:text-5xl">NOMICO</p>
        <p className="text-3xl md:text-5xl text-orange-500">#404</p>
        <p className="text-3xl md:text-5xl">LABS</p>
    </div>
            </div>
        </>
    );
}