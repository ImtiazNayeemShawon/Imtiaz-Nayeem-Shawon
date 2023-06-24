import React from "react";

export default function expertise() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 mt-20">
        <div className="pl-40 pr-10">
          <h1 className="text-5xl mainfont font-semibold ">
            My expert <br /> areas{" "}
            <div className="h-1 bg-black rounded-lg w-40 mt-4"></div>
          </h1>
          <p className="mt-2 leading-8 mainfont text-lg text-gray-800">
            You can express yourself however you want and whenever you want, for
            free. You can customize a template or make your own from scratch,
            with an immersive library at your disposal. You can express yourself
            however you want and whenever you free.{" "}
            <p className="mt-4">
              You can customize a template or make your own from scratch, with
              an immersive library at your disposal.
            </p>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
