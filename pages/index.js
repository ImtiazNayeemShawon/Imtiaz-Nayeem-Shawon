import Head from "next/head";
import SmallIntro from "./SmallIntro";
import Clients from "./Clients";
import Brands from "./brands";
import Experince from "./experince";
import Home from "./Home";
import WhatIDo from "./WhatIDo";


export default function App() {
  return (
    <>
      <div>
        <Head>
          <title>Imtiaz Nayeem Shawon</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="mx-20  max-sm:mx-5 ">
        <Home />
        <Clients />
        <SmallIntro />
        <Brands />
        <WhatIDo/>
        <Experince />
      </div>
    </>
  );
}