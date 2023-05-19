import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

const Proje = () => {
  const [state, setState] = useState(0);
  const handleNav = () => {
    setState(!state);
  }
  return (
    <>
    <Head>
        <title>PROJECTS</title>
        <meta
          content="Nomicolabs is web3 development studio, our AIM is making WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/logot.png" rel="icon" />
  </Head>
    <div className="flex flex-col">
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
      <div className={state ? "sm:hidden top-0 left-0 right-0 absolute h-screen w-screen flex flex-col justify-center items-center bg-white ease-in duration-300" : "sm:hidden top-0 left-[-100%] right-0 ease-in duration-300 absolute h-screen w-screen flex flex-col justify-center items-center bg-white"}>
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
    <div className="flex justify-center">
        <p className="bg-black text-white text-5xl p-[10px] m-[20px]">PROJECTS</p>
    </div>
    <div className="flex flex-wrap justify-center items-center">
    <div className="flex self-center m-[50px] flex-row flex-wrap border-2 border-black rounded-2xl">
    <p className="flex self-center pl-[20px] text-xl font-bold">WEB3APP</p>
    <Link href="https://toolum.vercel.app/" target="_blank" className="m-[20px]">
    <div className=" flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Toolum</p>
      <p>#WEB3 LIBRARY</p>
    </div>
    </Link>
    <Link href="https://vecktrum.vercel.app/" target="_blank" className="m-[20px]">
    <div className=" flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Vecktrum</p>
      <p>#WEB3 WALLET</p>
    </div>
    </Link>
    <Link href="https://magigen.vercel.app/" target="_blank" className="m-[20px]">
    <div className=" flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">MagiGen</p>
      <p>#WEB3 GENERATOR</p>
    </div>
    </Link>
    </div>
    <div className="flex self-center m-[50px] flex-row flex-wrap border-2 border-black rounded-2xl">
    <p className="flex self-center pl-[20px] text-xl font-bold">BLOCKCHAINSOLUTION</p>
    <Link href="https://specktr-w.vercel.app/" target="_blank" className="m-[20px]">
    <div className=" flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Specktr-W</p>
      <p>#TRANSACTIONS PROTOCOL</p>
    </div>
    </Link>
    <Link href="https://fleetleopard.vercel.app/" target="_blank" className="m-[20px]">
    <div className=" flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">FleetLeopard</p>
      <p>#BLOCKCHAIN PROTOCOL</p>
    </div>
    </Link>
    <Link href="https://floatblock.vercel.app/" target="_blank" className="m-[20px]">
    <div className=" flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">FloatBlock</p>
      <p>#STORAGE PROTOCOL</p>
    </div>
    </Link>
    </div>
    </div>
  </div>
    </>
);
}

export default Proje;