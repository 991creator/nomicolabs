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
        <title>NOMICOLABS</title>
        <meta
          content="Nomicolabs is web3 development studio, our AIM is making WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/logot.png" rel="icon" />
      </Head>

      <div className="h-screen w-screen">
        <Navi />

        <div className="flex flex-col justify-center items-center h-5/6">
          <p className="text-5xl md:text-7xl">NOMICOLABS</p>
          <p className="text-lg md:text-xl font-bold mt-[15px] md:mt-[25px]">
            DEEP SECURE
          </p>
        </div>

        <div className="flex justify-center items-end">
          <div className="flex flex-row">
            <a
              href="https://twitter.com/nomicolabs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @NOMICOLABS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
