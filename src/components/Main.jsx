import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import "../style.css";

export default function Main() {
  return (
    <div className="overflow overflow-y-scroll h-screen w-[75%]">
      <div className=" overflow relative rounded-xl bg-[#1f1f1f] -mb-10">
        <Header />
        <About />
      </div>
    </div>
  );
}
