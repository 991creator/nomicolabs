import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Navi from "../components/navi";

const Proje = () => {
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
    <Navi></Navi>
    <div className="flex justify-center">
        <p className="text-black text-5xl p-[10px] m-[20px]">PROJECTS</p>
    </div>
    <div className="flex flex-wrap justify-center items-center">
    
    <Link href="https://toolum.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Toolum</p>
      <p>#WEB3 LIBRARY</p>
    </div>
    </Link>
    <Link href="https://vecktrum.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Vecktrum</p>
      <p>#WEB3 WALLET</p>
    </div>
    </Link>
    <Link href="https://specktr-w.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Specktr-W</p>
      <p>#WEB3 TRANSFERS</p>
    </div>
    </Link>
    <Link href="https://floatblock.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">FloatBlock</p>
      <p>#WEB3 SPACE</p>
    </div>
    </Link>
    <Link href="https://debora.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[200px] w-[300px] bg-white border-2 border-black rounded-2xl">
      <p className="text-4xl m-[15px]">Debora</p>
      <p>#WEB3 CHAT</p>
    </div>
    </Link>
    </div>
    </div>
    </>
);
}

export default Proje;