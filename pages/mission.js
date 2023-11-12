import Head from "next/head";
import Navi from "../components/navi";

const About = () => {
  return (
    <>
      <Head>
        <title>MISSION // NOMICO</title>
        <meta
          content="Nomicolabs - WEB3 development studio."
          name="Nomicolabs"
        />
        <link href="/mainLogo.png" rel="icon" />
      </Head>
      
      <div className="bg-white min-h-screen flex flex-col">
        <Navi />
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="flex-col flex flex-col justify-center items-start text-center">
            <p className="text-7xl font-bold">TODO:</p>
          <p className="text-5xl md:text-8xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text">
            EXPLORE.
          </p>
          <p className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text">
            BUILD.
          </p>
          <p className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text">
            RESEARCH.
          </p>
          <p className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text">
            LEARN.
          </p>
          <p className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text">
            PROTECT.
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
