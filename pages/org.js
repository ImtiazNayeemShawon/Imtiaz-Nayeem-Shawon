"use client";
import React from "react";
import Image from "next/image";

export default function Org() {
  const imageArray = [
    {
      name: "Bangladesh Space Research society",
      url: "https://i.ibb.co/sgW3xMW/image-3-10.png",
    },
    { name: "Arudhdho 71", url: "https://i.ibb.co/6sqGXH8/image-4-1.png" },
    { name: "Artas Builder", url: "https://i.ibb.co/kDzTnWZ/image-6.png" },
    { name: "Moms oil change", url: "https://i.ibb.co/Rpc8KC1/image-12.png" },
    { name: "medithriller", url: "https://i.ibb.co/jwmM5bM/image-16.png" },
    { name: "image-17.png", url: "https://i.ibb.co/sK59vrm/image-17.png" },
    { name: "image-18.png", url: "https://i.ibb.co/fSzBKf4/image-18.png" },
    { name: "image-38.png", url: "https://i.ibb.co/dLX7dG2/image-38.png" },
    { name: "image-39-1.png", url: "https://i.ibb.co/Npq57vV/image-39-1.png" },
    { name: "image-40-1.png", url: "https://i.ibb.co/b6KrWQ0/image-40-1.png" },
    {
      name: "Mental health care Bangladesh",
      url: "https://i.ibb.co/n1mq4f0/mhclogo.png",
    },
    {
      name: "Bangladesh Space Research society",
      url: "https://i.ibb.co/sgW3xMW/image-3-10.png",
    },
    { name: "Arudhdho 71", url: "https://i.ibb.co/6sqGXH8/image-4-1.png" },
    { name: "Artas Builder", url: "https://i.ibb.co/kDzTnWZ/image-6.png" },
    { name: "Moms oil change", url: "https://i.ibb.co/Rpc8KC1/image-12.png" },
    { name: "medithriller", url: "https://i.ibb.co/jwmM5bM/image-16.png" },
    { name: "image-17.png", url: "https://i.ibb.co/sK59vrm/image-17.png" },
    { name: "image-18.png", url: "https://i.ibb.co/fSzBKf4/image-18.png" },
    { name: "image-38.png", url: "https://i.ibb.co/dLX7dG2/image-38.png" },
    { name: "image-39-1.png", url: "https://i.ibb.co/Npq57vV/image-39-1.png" },
    { name: "image-40-1.png", url: "https://i.ibb.co/b6KrWQ0/image-40-1.png" },
    {
      name: "Mental health care Bangladesh",
      url: "https://i.ibb.co/n1mq4f0/mhclogo.png",
    },
    { name: "Arudhdho 71", url: "https://i.ibb.co/6sqGXH8/image-4-1.png" },
    { name: "Artas Builder", url: "https://i.ibb.co/kDzTnWZ/image-6.png" },
    { name: "Moms oil change", url: "https://i.ibb.co/Rpc8KC1/image-12.png" },
    { name: "medithriller", url: "https://i.ibb.co/jwmM5bM/image-16.png" },
    { name: "image-17.png", url: "https://i.ibb.co/sK59vrm/image-17.png" },
    { name: "image-18.png", url: "https://i.ibb.co/fSzBKf4/image-18.png" },
    { name: "image-38.png", url: "https://i.ibb.co/dLX7dG2/image-38.png" },
    { name: "image-39-1.png", url: "https://i.ibb.co/Npq57vV/image-39-1.png" },
    { name: "image-40-1.png", url: "https://i.ibb.co/b6KrWQ0/image-40-1.png" },
    {
      name: "Mental health care Bangladesh",
      url: "https://i.ibb.co/n1mq4f0/mhclogo.png",
    },
    { name: "Arudhdho 71", url: "https://i.ibb.co/6sqGXH8/image-4-1.png" },
    { name: "Artas Builder", url: "https://i.ibb.co/kDzTnWZ/image-6.png" },
    { name: "Moms oil change", url: "https://i.ibb.co/Rpc8KC1/image-12.png" },
    { name: "medithriller", url: "https://i.ibb.co/jwmM5bM/image-16.png" },
    { name: "image-17.png", url: "https://i.ibb.co/sK59vrm/image-17.png" },
    { name: "image-18.png", url: "https://i.ibb.co/fSzBKf4/image-18.png" },
    { name: "image-38.png", url: "https://i.ibb.co/dLX7dG2/image-38.png" },
    { name: "image-39-1.png", url: "https://i.ibb.co/Npq57vV/image-39-1.png" },
    { name: "image-40-1.png", url: "https://i.ibb.co/b6KrWQ0/image-40-1.png" },
    {
      name: "Mental health care Bangladesh",
      url: "https://i.ibb.co/n1mq4f0/mhclogo.png",
    },
    { name: "Arudhdho 71", url: "https://i.ibb.co/6sqGXH8/image-4-1.png" },
    { name: "Artas Builder", url: "https://i.ibb.co/kDzTnWZ/image-6.png" },
    { name: "Moms oil change", url: "https://i.ibb.co/Rpc8KC1/image-12.png" },
    { name: "medithriller", url: "https://i.ibb.co/jwmM5bM/image-16.png" },
    { name: "image-17.png", url: "https://i.ibb.co/sK59vrm/image-17.png" },
    { name: "image-18.png", url: "https://i.ibb.co/fSzBKf4/image-18.png" },
    { name: "image-38.png", url: "https://i.ibb.co/dLX7dG2/image-38.png" },
    { name: "image-39-1.png", url: "https://i.ibb.co/Npq57vV/image-39-1.png" },
    { name: "image-40-1.png", url: "https://i.ibb.co/b6KrWQ0/image-40-1.png" },
    {
      name: "Mental health care Bangladesh",
      url: "https://i.ibb.co/n1mq4f0/mhclogo.png",
    },
  ];

  return (
    <div className="mt-60 max-sm:mt-20">
      <div className="my-10 w-fit m-auto block">
        <h1 className="text-center mainfont  capitalize text-[30px] text-white">
          &#128509; Brands I worked with{" "}
        </h1>
        <div className="w-40 h-[1px] rounded-full bg-[#6a6767]" />
      </div>
      <div className="overflow-clip ">
        <div className="flex logos  justify-center  gap-40 max-sm:gap-20">
          {imageArray?.map((data, index) => (
            <Image
              key={index}
              src={data?.url}
              alt={data?.name}
              width={100}
              height={100}
              className="logostyle w-[200px] h-[60px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
