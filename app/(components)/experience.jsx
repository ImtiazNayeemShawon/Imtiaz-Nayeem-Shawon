"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { useInView, motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/treasingbea";

export default function Experience() {
  const content = [
    {
      title: "Lead Developer @zipbox",
      tag: "@zipbox",
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
      tag: "@BSRS",
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
      tag: "@MHCBD",
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
    {
      title: "Team Leader @AstroTots NASA space app challenge 2023",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Developed and introduced our space exploration project to NASA Space
            Apps Challenge judges.
          </li>
          <li className="my-4">
            Collaborated with teams, met with seniors, received guidance, and
            built a strong network.
          </li>
        </ul>
      ),
    },
    {
      title: "IT team member @Aruddho 71",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed and developed blogs, event management platforms, and
            organizational portfolio websites, improving online presence and
            user engagement
          </li>
          <li className="my-4">
            Collaborated with teams and contributed to initiatives focused on
            Yoth development
          </li>
        </ul>
      ),
    },
    {
      title: "Team Leader @AstroTots NASA space app challenge 2024",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Developed and introduced our space exploration project to NASA Space
            Apps Challenge judges.
          </li>
          <li className="my-4">
            Collaborated with teams, met with seniors, received guidance, and
            built a strong network.
          </li>
        </ul>
      ),
    },
    {
      title: "Web developer -Volunteer @Cyber Teens",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Worked as volunteer with a big team, making awarness cybeer security
            among people,specifically Teen ageers
          </li>
        </ul>
      ),
    },
  ];

  function Cards({ data }) {
    const ref = useRef(null);
    const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={` py-20 p-4 `}
      >
        <p ref={ref} className="text-2xl font-bold text-white">
          {data?.title}
        </p>
        <div className="text-[#d4c7c7] mt-4 text-sm ml-4">
          {data?.description}
        </div>
      </motion.div>
    );
  }

  return (
    <div id="experince" className=" my-40 mx-[20%] max-md:mx-[5%]">
      <div className="">
        <h1 className="font-bold text-white  text-[40px]">
          <b className="border-b-2 border-red-400">Experiences</b> of Working as
          a Developer
        </h1>
        <p className="text-sm text-white my-4 ">
          After embarking on my coding journey, I have accumulated extensive
          experience as a developer through numerous freelance projects, various
          companies, and voluntary contributions.
        </p>
        <TracingBeam>
          <div className="flex justify-center items-start mx-[4%] max-md:mx-0">
            <div className="w-full">
              {content?.map((data, index) => (
                <Cards data={data} />
              ))}
            </div>
          </div>
        </TracingBeam>
      </div>
    </div>
  );
}
