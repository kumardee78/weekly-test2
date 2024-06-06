import React from "react";
import Header from "./Header.jsx";
import About from "./About.jsx";
import "../style.css";

export default function Main() {
  return (
    <div className="w-[75%] h-[41rem]">
      <div className=" overflow relative rounded-xl bg-[#1f1f1f] mb-10 my-4 overflow-y-scroll h-full shadow-gray-900 shadow-lg">
        <Header />
        <About />
      </div>
    </div>
  );
}
