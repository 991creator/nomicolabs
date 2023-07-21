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
          content="Nomicolabs is web3 development studio, our AIM is making WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/mainLogo.png" rel="icon" />
      </Head>

      <div className="h-screen w-screen bg-slate-950 text-white">
        <Navi />

        <div className="flex flex-col justify-center items-center ">
          <Image src="/mainLogo.png" height="500" width="500" alt="logo"></Image>
          <p className="text-3xl md:text-5xl  font-bold mt-[15px] md:mt-[25px]">
            NOMICO UNIVERSE
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
