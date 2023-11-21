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
            content="Nomicolabs - WEB3 development studio."
            name="Nomicolabs"
          />
          <link href="/mainLogo.png" rel="icon" />
      </Head>
      <div className="flex flex-col h-full md:h-screen w-screen bg-white text-white">
        <Navi />
        <div className="flex flex-wrap h-full w-full justify-center items-center p-4">
          <Link href="https://floatblock.vercel.app/" target="_blank"
            className="m-4 transition duration-300 ease-out hover:scale-105 hover:shadow-lg flex flex-col items-center h-96 w-72 bg-white text-black border-2 border-gray-300 overflow-hidden">
              <Image src="/floatblock.png" alt="FloatBlock" width={200} height={150} layout="fixed" />
              <div className="p-4">
                <p className="text-2xl font-semibold">FloatBlock</p>
                <p className="text-lg mt-2">#WEB3 Social-FI</p>
                <p className="text-sm mt-4">Decentralized Social-FI application.</p>
              </div>
          </Link>
          <Link href="https://t.me/Toucanibot" target="_blank"
            className="m-4 transition duration-300 ease-out hover:scale-105 hover:shadow-lg flex flex-col items-center h-96 w-72 bg-white text-black border-2 border-gray-300 overflow-hidden">
              <Image src="/toucan.png" alt="FloatBlock" width={200} height={150} layout="fixed" />
              <div className="p-4">
                <p className="text-2xl font-semibold">Toucani.FI</p>
                <p className="text-lg mt-2">#WEB3 Helper</p>
                <p className="text-sm mt-4">Friendly crypto-financial helper..</p>
              </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Proje;
