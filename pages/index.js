import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [state, setState] = useState(0);

  const handleNav = () => {
    setState(!state);
  }
  return (
  <>
  <Head>
        <title>NOMICOLABS</title>
        <meta
          content="Nomicolabs is web3 development studio, our AIM is making WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/logot.png" rel="icon" />
  </Head>
  <div className="h-screen w-screen">
    <div className="hidden border-b-2 border-b-black md:flex flex-row justify-between items-start items-center">
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
        <Link href="/mission" className="p-[15px] text-xl">MISSION</Link>
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
        <Link className="text-4xl p-[10px] m-[10px]" href="/mission">
          MISSION
        </Link>
        </div> 
    </div>
    <div className="flex flex-col justify-center items-center h-5/6">
    <div className="flex justify-center items-start">
        <b className="text-5xl md:text-8xl">NOMICO</b>
        <b className="text-lg md:text-3xl underline bg-black text-white">LABS</b>
    </div>
    <p className="text-sm md:text-base font-bold">
      100110010001
    </p>
    </div>
    <div className="flex justify-center items-end">
      <div className="flex flex-row">
        <Link href="https://twitter.com/nomicolabs" className="underline">@NOMICOLABS</Link>
      </div>
    </div>
  </div>
  
  </>
);
}

export default Home;