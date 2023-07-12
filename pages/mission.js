import Head from "next/head";
import Navi from "../components/navi";

const About = () => {

  return (
    <>
      <Head>
        <title>MISSION // NOMICO</title>
        <meta
          content="Nomicolabs is a web3 development studio. Our aim is to make WEB3 clear for everyone."
          name="Nomicolabs"
        />
        <link href="/mainLogo.png" rel="icon" />
      </Head>
      
      <div className="bg-slate-950 min-h-screen flex flex-col">
        <Navi />
        <div className="flex flex-col justify-center items-center flex-grow">
          <div className="border-4 border-white p-[10px] text-white">
            <p className="text-4xl md:text-6xl">PROTECT</p>
            <p className="text-4xl md:text-6xl">EXPLORE</p>
            <p className="text-4xl md:text-6xl">RESEARCH</p>
            <p className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-rose-500 to-amber-700">
              WEB3
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
