import Head from "next/head";
import SmallIntro from "./SmallIntro";
//import Clients from "./Clients";
import Brands from "./brands";
import Experince from "./experince";
import Home from "./Home";
import WhatIDo from "./WhatIDo";
import Ex from "./testmonials";

export default function App() {
  return (
    <>
      <div>
        <Head>
          <title>Imtiaz Nayeem Shawon</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css">
            </link>

        </Head>
      </div>
      <div className="bgi">
       <div className="bghome">
       <Home />
       <SmallIntro />
        <Brands />
        <WhatIDo />
       </div>
       
        <Experince />
        <Ex />
      </div>
    </>
  );
}
