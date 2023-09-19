import React from "react";
import Styles from "../styles/Projects.module.css";
import Image from "next/image";

export default function Projects() {
  const imageUrls = [
    "https://i.ibb.co/tBJSjBn/Mac-Book-Pro-16-5.png",
    "https://i.ibb.co/NZzTHT4/Mac-Book-Pro-16-6.png",
    "https://i.ibb.co/GdxSWcD/Mac-Book-Pro-16-4.png",
    "https://i.ibb.co/tJ2wtdH/BYOC.png",
    "https://i.ibb.co/xDTgNk1/edu.png",
    "https://i.ibb.co/hMNx13f/FATE.png",
  ];
  return (
    <React.Fragment>
      <div id="Projects" className={Styles.Projects}>
        <h1 className="mainfont text-center text-5xl font-semibold us">
          My Latest Projects
        </h1>
        <p className="text-sm text-gray-700 text-center">
          I was work with many project but I cant show that all project because
          of security and company policy issue{" "}
        </p>

        <div className="grid grid-cols-3 gap-5 mt-10">
          {imageUrls.map((imageUrl, index) => (
            <div >
              <Image
              className="hover:scale-105 duration-300"
                key={index}
                src={imageUrl}
                alt={`Image ${index}`}
                width={400}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
