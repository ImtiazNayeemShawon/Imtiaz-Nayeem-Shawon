import React from "react";
import Styles from "../styles/Projects.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <React.Fragment>
      <div id="Projects" className={Styles.Projects}>
        <h1 className="mainfont text-center text-3xl font-semibold">
          My Latest Projects
        </h1>
        <p className="text-sm text-gray-700 text-center">
          I was work with many project but I cant show that all project because
          of security and company policy issue{" "}
        </p>

        {/* section 1 */}
        <div className="grid grid-cols-2 gap-5 mt-10  max-sm:grid-cols-1 max-sm:gap-1">
          <div className={Styles.Showcase}>
            <a href="https://www.eduthriller.com/" target="_blank">
              <Image
                src="https://i.ibb.co/wLfsTKN/image.png"
                width={800}
                height={1000}
                className="hover:scale-105 duration-300  cursor-pointer"
              />{" "}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5 max-sm:gap-1">
            <div className={Styles.Showcase}>
              <a href="https://zipbox.netlify.app/" target="_blank">
                <Image
                  src="https://i.ibb.co/WgdWxgZ/Mac-Book-Pro-16-1-4.png"
                  width={400}
                  height={400}
                  className="hover:scale-105 duration-300 cursor-pointer"
                />
              </a>
            </div>
            <div className={Styles.Showcase}>
              <a href="https://mhcbd.netlify.app/" target="_blank">
                <Image
                  src="https://i.ibb.co/86b7Rn8/Mac-Book-Pro-16-1-3.png"
                  width={400}
                  height={400}
                  className="hover:scale-105 duration-300 cursor-pointer"
                />
              </a>
            </div>
            <div className={Styles.Showcase}>
              <a href="https://artasbygg.se/" target="_blank">
                <Image
                  src="https://i.ibb.co/dK8RbyR/image.png
               "
                  width={400}
                  height={400}
                  className="hover:scale-105 duration-300 cursor-pointer"
                />
              </a>
            </div>
            <div className={Styles.Showcase}>
              <a href="https://imtiaztodo.netlify.app/" target="_blank">
                <Image
                  src="https://i.ibb.co/GWhsKHj/image.png
               "
                  width={400}
                  height={400}
                  className="hover:scale-105 duration-300 cursor-pointer"
                />
              </a>
            </div>{" "}
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}
