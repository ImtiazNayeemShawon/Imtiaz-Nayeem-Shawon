"use client";
import React, { useRef } from "react";

import { useScroll, useInView, motion } from "framer-motion";

function Cards({ data }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={` py-20 p-4 m-2`}
    >
      <p ref={ref} className="text-2xl font-bold text-white">
        {data?.title}
      </p>
      <div className="text-[#d4c7c7] mt-4 text-sm">{data?.description}</div>
    </motion.div>
  );
}

export default function Experience() {
  const content = [
    {
      title: "Lead Developer @zipbox",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed, developed, and deployed scalable full stack web
            applications, ensuring high performance and responsiveness.
          </li>
          <li className="my-4">
            Led teams and managed client relations, successfully delivering
            projects for over 30 clients.{" "}
          </li>
          <li className="my-4">
            Spearheaded product development initiatives, driving innovation and
            achieving project goals.
          </li>
        </ul>
      ),
    },
    {
      title: "Web developer @Bangladesh Space Research Society",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed web applications and dashboards for event management,
            enhancing user experience and operational efficiency
          </li>
          <li className="my-4">
            Collaborated with cross-functional teams and senior developers to
            ensure seamless project execution and delivery.
          </li>
        </ul>
      ),
    },
    {
      title: "Web developer -Intern @Mental Health Care Bangladesh",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed and developed blogs, event management platforms, and
            organizational portfolio websites, improving online presence and
            user engagement
          </li>
          <li className="my-4">
            Collaborated with teams and contributed to initiatives focused on
            mental health awareness among young individuals.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div id="experince" className=" my-40 ">
      <div className="mx-[10%] max-md:mx-[10%]">
        <h1 className="font-bold text-white  text-[40px]">
          <b className="border-b-2 border-red-400">Experiences</b> of Working as
          a Developer
        </h1>
        <p className="text-sm text-white my-4 ">
          After embarking on my coding journey, I have accumulated extensive
          experience as a developer through numerous freelance projects, various
          companies, and voluntary contributions.
        </p>

        <div className="flex justify-between items-start ">
          <div className="w-full">
            {content?.map((data, index) => (
              <Cards data={data} />
            ))}
          </div>
          <div className="w-full sticky top-[30%]">
            <div className="w-full h-60 rounded-sm bg-white text-black ">
              Hello world
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
