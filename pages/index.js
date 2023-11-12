import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Navi from "../components/navi";

const Home = () => {
  const [state, setState] = useState(false);

  const handleNav = () => {
    setState(!state);
  };

  return (
    <>
      <Head>
        <title>HOME // NOMICO</title>
        <meta
          content="Nomicolabs - WEB3 development studio."
          name="Nomicolabs"
        />
        <link href="/mainLogo.png" rel="icon" />
      </Head>

      <div className="h-screen w-screen overflow-hidden bg-white text-black">
        <Navi />
        <p className="text-8xl md:text-9xl font-bold ">
            WEB3.0
          </p>
          <p className="text-5xl md:text-4xl ">
            PIONEERS
          </p>
        <div className="flex md:text-3xl font-bold text-2xl flex-col justify-center items-end h-full ">
          <p>Exploring on-chain world...</p>
        </div>
      </div>
    </>
  );
};

export default Home;
