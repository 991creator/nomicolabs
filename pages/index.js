import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Navi from "../components/navi";

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
    <Navi></Navi>
    <div className="flex flex-col justify-center items-center h-5/6">
    <div className="flex justify-center items-start">
        <b className="text-5xl md:text-8xl">NOMICO</b>
        <b className="text-lg md:text-3xl underline bg-black text-white">LABS</b>
    </div>
    <p className="text-sm md:text-base font-bold">
      WEB3DEFENDERS
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