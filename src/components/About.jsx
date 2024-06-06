import React, { useState } from "react";
import ToggleDiv from "./ToggleDiv";
import Languages from "./Languages";
import ExploringCreativity from "./ExploringCreativity";
import PrimaryFocus from "./PrimaryFocus";
import DevelopmentSkills from "./DevelopmentSkills";









export default function About() {
  const [isShown, setIsShown] = useState(false);

  function handleToggleDiv() {
    if (isShown) {
      setIsShown(false);
    } else {
      setIsShown(true);
    }
    console.log(isShown);
  }
  return (
    <div className="py-4 px-6  rounded-xl">
      <h1 className="py-4 mb-4 px-4">
        <span className="text-4xl font-bold border-b-4 py-2">About Me</span>
      </h1>
      <div className="shadow-md shadow-gray-600 rounded-xl py-4 px-6 my-6 bg-[#222C32] mb-6">
        <p>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on.
        </p>
        <ToggleDiv isShown={isShown} setIsShown={setIsShown} />
        <p className="w-[25%] mx-auto py-4">
          <button onClick={handleToggleDiv} className="">
            {isShown ? "Hide text" : "Show more"}
          </button>
        </p>
      </div>
      <PrimaryFocus/>
      <ExploringCreativity/>
      <Languages/>
      <DevelopmentSkills/>
    </div>
  );
}
