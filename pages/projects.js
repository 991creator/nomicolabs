import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Navi from "../components/navi";

const Proje = () => {
  return (
    <>
    <Head>
        <title>PROJECTS // NOMICO</title>
        <meta
          content="Nomicolabs is web3 development studio, our AIM is making WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/mainLogo.png" rel="icon" />
  </Head>
    <div className="flex flex-col h-full md:h-screen w-screen bg-slate-950">
    <Navi></Navi>
    <div className="flex flex-wrap h-full w=full justify-center items-center">
    
    <Link href="https://sageport.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out p-[15px] hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[400px] w-[300px] bg-white border-2 border-black">
      <p className="text-4xl">SagePort</p>
      <p className="text-xl my-[15px]">#WEB3 safe storage</p>
      <p className="text-base mt-[25px] text-xl">Private cells with decentralized ownership stored on Blockchain!</p>
    </div>
    </Link>
    <Link href="https://floatblock.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out p-[15px] hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[400px] w-[300px] bg-white border-2 border-black">
      <p className="text-4xl">FloatBlock</p>
      <p className="text-xl my-[15px]">#WEB3 social media</p>
      <p className="text-base mt-[25px] text-xl">WWEB3 decentralized web application for posting and share actual news!</p>
    </div>
    </Link>
    <Link href="https://debora.vercel.app/" target="_blank" className="m-[20px]">
    <div className="transition duration-150 ease-out p-[15px] hover:ease-in flex flex-col hover:bg-gray-200 justify-center items-center h-[400px] w-[300px] bg-white border-2 border-black">
      <p className="text-4xl">Debora</p>
      <p className="text-xl my-[15px]">#WEB3 messenger</p>
      <p className="text-base mt-[25px] text-xl">Decentralized and private messenger web application for encryption chatting!</p>
    </div>
    </Link>
    </div>
    </div>
    </>
);
}

export default Proje;