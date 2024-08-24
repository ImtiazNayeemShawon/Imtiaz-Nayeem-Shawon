import React from "react";
import Sidebar from "../sidebar";

export default function layout({ children }) {
  return (
    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
}
