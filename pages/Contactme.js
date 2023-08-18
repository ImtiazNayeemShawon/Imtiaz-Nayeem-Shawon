import React from "react";

export default function Contactme() {
  return (
    <div className="mx-40 max-sm:mx-5">
      <h1 className="text-3xl font-semibold capitalize text-center">
        Contact me{" "}
      </h1>
      <p className="text-sm text-center">
        I am open to collaborating on your project; please feel free to contact
        me.
      </p>
      <div className="grid grid-cols-2 gap-10 place-items-cente mt-20  ring-1 p-8 rounded-xl max-sm:grid-cols-1 max-sm:p-2 max-sm:py-5">
        <div>
          <p className="ml-2 text-lg">Enter Your name</p>
          <input
            type="text"
            className="w-full h-12 mb-6 border-0 rounded-xl outline-none  p-5  "
            placeholder="Enter Your name "
          />
          <p className="ml-2 text-lg">Enter Your email</p>
          <input
            type="text"
            className="w-full h-12 mb-6 border-0 rounded-xl outline-none  p-5  "
            placeholder="Enter Your email"
          />
          <p className="ml-2 text-lg">Enter Your phone</p>
          <input
            type="text"
            className="w-full h-12 mb-6 border-0 rounded-xl outline-none  p-5  "
            placeholder="Enter Your phone"
          />{" "}
          <br />
          
        </div>
        <textarea className="w-full rounded-xl h-full mb-6 border-0 outline-none  p-5  "></textarea>
        <button className="px-8 w-[50%] max-sm:w-full py-2 bg-blue-600 text-white rounded-full uppercase">
            Submit
          </button>
      </div>
    </div>
  );
}
