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
          content="Web3lab"
          name="Making web3 clear."
        />
        <link href="/logot.png" rel="icon" />
  </Head>
    <div className="flex flex-col">
    <div className="hidden md:flex flex-row justify-between items-start items-center">
      <div className="ml-[30px]">
        <Image src="/logot.png" width="100" height="100" alt="logo" className="justify-start h-[100px] w-[100px]"></Image>
      </div>
      <div className="flex flex-row justify-end mr-[100px]">
      <div className="mx-[15px]">
        <Link href="/" className="p-[15px] text-xl">HOME</Link>
      </div>
      <div className="mx-[15px]">
        <Link href="/proje" className="p-[15px] text-xl">PROJE</Link>
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
      <div className={state ? "sm:hidden top-0 left-0 right-0 absolute h-screen w-screen flex flex-col justify-center items-center bg-white ease-in duration-300" : "sm:hidden top-0 left-[-100%] right-0 ease-in duration-300 absolute h-screen w-screen flex flex-col justify-center items-center bg-white"}>
        <Link className="text-4xl p-[10px] m-[10px]" href="/">
          HOME
        </Link>
        <Link className="text-4xl p-[10px] m-[10px]" href="/proje">
          PROJE
        </Link>
        <Link className="text-4xl p-[10px] m-[10px]" href="/about">
          ABOUT
        </Link>
        </div> 
    </div>
    <div className="flex justify-center">
        <p className="bg-black text-white text-5xl p-[10px]">PROJECTS</p>
    </div>
    <div className="flex flex-row flex-wrap justify-center items-center m-[50px]">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden m-[15px]">
  <div className="flex justify-center items-center object-cover h-48 bg-black">
    <p className="text-white text-2xl m-[25px]">#TOOLUM</p>
  </div>
  <div className="p-4">
    <h2 className="text-lg font-medium text-gray-900 mb-2">
      Make the WEB3 clear
    </h2>
    <p className="w-full md:w-96 text-gray-700 mb-4">
    Toolum is a service that helps crypto influencers master new areas of the WEB3 movement, or simplify their daily routine in working with it. With Toolum your life will be easier
    </p>
    <Link
      href="https://toolum.vercel.app/"
      target="_blank"
      className="inline-block bg-black hover:bg-white text-white hover:text-black border-2 border-black rounded-lg py-2 px-4 rounded transition-colors duration-300"
    >
      Explore
    </Link>
  </div>
</div>
<div className="bg-white rounded-lg shadow-lg overflow-hidden m-[15px]">
  <div className="flex justify-center items-center object-cover h-48 bg-black">
    <p className="text-white text-2xl m-[25px]">#VECKTRUM</p>
  </div>
  <div className="h-full p-4">
    <h2 className="text-lg font-medium text-gray-900 mb-2">
      Crypto portfolio helper
    </h2>
    <p className="w-full md:w-96 text-gray-700 mb-4 overflow">
    Vecktrum is a convenient assistant in working with your crypto portfolio. A simple interface will help you find out the balance, the current price of gas in different networks.
    </p>
    <Link
      href="https://vecktrum.vercel.app/"
      target="_blank"
      className="inline-block bg-black hover:bg-white text-white hover:text-black border-2 border-black rounded-lg py-2 px-4 rounded transition-colors duration-300"
    >
      Explore
    </Link>
  </div>
</div>
<div className="bg-white rounded-lg shadow-lg overflow-hidden m-[15px]">
  <div className="flex justify-center items-center object-cover h-48 bg-black">
    <p className="text-white text-2xl m-[25px]">#MAGIGEN</p>
  </div>
  <div className="p-4">
    <h2 className="text-lg font-medium text-gray-900 mb-2">
      Generate entire world
    </h2>
    <p className="w-full md:w-96 text-gray-700 mb-4">
    Magigen claims to be the weirdest app for web3, as it is a simple generator that allows you to generate a password for a wallet in a couple of seconds and much more.
    </p>
    <Link
      href="https://magigen.vercel.app/"
      target="_blank"
      className="inline-block bg-black hover:bg-white text-white hover:text-black border-2 border-black rounded-lg py-2 px-4 rounded transition-colors duration-300"
    >
      Explore
    </Link>
  </div>
</div>
    
    </div>
  </div>
  
    </>
);
}

export default Proje;