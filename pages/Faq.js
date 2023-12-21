"use client";
import React from "react";
import { Accordion } from "flowbite-react";

export default function Faq() {
  return (
    <div className="mt-40 mx-40 max-sm:mx-4 max-sm:mt-20">
      <div>
        <h1 className="text-center text-4xl max-sm:text-2xl text-white">
          Frequently Asked Questions
        </h1>
        <p className="capitalize text-center my-3">
          Your answers await right here
        </p>
        <div className="grid grid-cols-5 gap-5 max-sm:grid-cols-1 max-sm:flex-col-reverse max-sm:flex">
          <div className="col-span-2 max-sm:col-span-1 bg-[#181818] border border-[#2e2c2c] p-6  ">
            <p className="text-center text-lg  font-semibold">
              {" "}
              Have any more questions or want to start collaborating?
            </p>

            <h1 className="text-center text-[100px]">🤔</h1>
            <div className="bg-black" />
            <a  href="https://wa.link/gihi2p" target="blank" className="border border-[#191818] bg-white text-[#242424] px-10 text-lg  py-2 rounded-lg flex items-center gap-2 m-auto w-fit">
              💬 Let's talk
            </a>
            <p className="text-center text-sm my-2">
              * Response time is typically around 1 hours
            </p>
          </div>
          <div className="col-span-3 max-sm:col-span-1">
            <Accordion  className="my-10 py-1" >
              <Accordion.Panel>
                <Accordion.Title className="px-4 py-3 font- text-lg rounded-none">
                  Are you available to hire full time?
                </Accordion.Title>
                <Accordion.Content className="p-4">
                  <p>
                    Yes, I'm available for a full-time remote opportunity. Let
                    me know about your company/agency details.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion className="my-10 py-1" collapseAll> 
              <Accordion.Panel>
                <Accordion.Title className="px-4 py-3 font- text-lg rounded-none">
                  How you give pricing estimate to clients?{" "}
                </Accordion.Title>
                <Accordion.Content className="p-4">
                  <p>
                    Yeah, it depends on clients' requirements, such as
                    application size, UI/UX complexity, and some other factors.
                    Inbox me if you are interested
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion  className="my-10 py-1" collapseAll>
              <Accordion.Panel>
                <Accordion.Title className="px-4 py-3 font- text-lg rounded-none">
                 Can you learn new technology or stack or new programming language for project?
                </Accordion.Title>
                <Accordion.Content className="p-4">
                  <p>
                  Yes, I can learn any framework or language if there is a need or use case in the project. It may require some time, but I am confident in my ability to learn and adapt quickly
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
