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
        <div className="flex flex-row  justify-center items-center flex-grow">
          <div className="flex flex-col justify-center items-center p-[10px] text-white h-[370px] w-[370px] bg-gradient-to-r from-purple-800 via-rose-500 to-amber-700">
            <div className="flex flex-col justify-center bg-black items-center h-[320px] w-[320px]">
              <div className="flex flex-col md:flex-row">
              <p className="text-5xl md:text-6xl">PROTECT</p>
              <div className="mx-[25px]">

              </div>
            <p className="text-5xl md:text-6xl">EXPLORE</p>
            <div className="mx-[25px]">

              </div>
            <p className="text-5xl md:text-6xl text-white">RESEARCH</p>
              </div>
            <p className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-rose-500 to-amber-700">
              WEB3.0
            </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
