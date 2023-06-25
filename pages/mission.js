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
        <p className="text-4xl md:text-6xl ">PROTECT</p>
        <p className="text-4xl md:text-6xl ">EXPLORE</p>
        <p className="text-4xl md:text-6xl ">RESEARCH</p>
        <p className="text-7xl md:text-9xl font-bold text-transparent rounded bg-clip-text caret-pink-600 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-purple-800 via-rose-500 to-amber-700"> WEB3</p>
      </div>
    </div>
  </div>
  
    </>
);
}

export default About;