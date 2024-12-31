import React from "react";

export default function Page() {
  return (
    <div style={{ margin: 0, padding: 0, width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/resume/resume1.pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    </div>
  );
}
