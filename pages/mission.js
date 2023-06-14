import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Navi from "../components/navi";

const About = () => {
  const [state, setState] = useState(0);
  const handleNav = () => {
    setState(!state);
  }

  return (
    <>
    <Head>
        <title>MISSION</title>
        <meta
          content="Nomicolabs is web3 development studio, our AIM is making WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/logot.png" rel="icon" />
  </Head>
    <div className="flex flex-col h-screen">
    <Navi></Navi>
    <div className="flex flex-col justify-center items-center h-full">
      <div className="border-4 border-black p-[10px]">
        <p className="text-2xl md:text-5xl font-bold">PROTECT</p>
        <p className="text-2xl md:text-5xl font-bold">EXPLORE</p>
        <p className="text-2xl md:text-5xl font-bold">RESEARCH</p>
        <p className="text-5xl md:text-8xl font-bold text-transparent rounded bg-clip-text caret-pink-600 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-purple-800 via-rose-500 to-amber-700"> web3</p>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-center items-center">
    <p className="text-4xl">TEAM</p>
    <div className="flex flex-row m-[25px]">
      <div className="flex flex-col justify-center items-center border-2 border-black rounded-xl m-[20px] p-[20px]">
        <Image src="/logot.png" width="100" height="100" alt="logo"></Image>
        <p className="text-2xl font-bold">991CREATOR</p>
        <p className="text-lg mt-[15px]">HEAD DEV.</p>
      </div>
    </div>
  </div>
  
    </>
);
}

export default About;