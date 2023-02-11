import React from "react";
import Data from "./api/data.json";

export default function Experince() {
  return (
    <div className="mt-44 ">
      <h1 className="text-4xl font-semibold text-gray-900 font-sans text-center p-5">
        My Experinces{" "}
      </h1>
      <p className="text-center text-sm text-gray-700">
        I am working on many non profit orgnazation as web developer blog
        writter i describe my all Experince below
      </p>
    

      {Data.map(item => (
          <div className="mt-10">
          <div className="grid grid-cols-3 place-items-center gap-0 grid-flow-row-dense max-sm:grid-cols-1">
             {/* bsrs section */}
            <div className="bg-gray-100 p-6 pl-10 pr-3 rounded-lg min-w-full">
              <h1 className="text-xl font-bold text-blue-700 text-left capitalize ">
               {item.title}
              </h1>
              <p className="text-gray-700 font-bold">{item.time} </p>
            </div>
            <div className="bg-red-600 text-gray-100 p-4 rounded-3xl font-bold">
              <p>At</p>{" "}
            </div>
  
            <div className="bg-gray-100 border-1 p-6  rounded-lg min-w-full">
              <h1 className="text-xl font-bold text-blue-700 capitalize ">
          {item.orgname}
              </h1>
              <p className="text-sm text-gray-800 font-bold">{item.location}</p>
              <p className="text-gray-900">{item.position}</p>
              <br />
  
              <p className="text-sm text-gray-700 leading-6">
               {item.body}
              </p>
            </div>
  
            {/* bsrs section */}
            
          </div>
          
        </div>
      ))}
    </div>
  );
}
