import { useState } from "react";
export default function Languages() {
  const [rangeValueOne, setRangeValueOne] = useState(90);
  const [rangeValueTwo, setRangeValueTwo] = useState(75);
  const [rangeValueThree, setRangeValueThree] = useState(100);
  const [rangeValueFourth, setRangeValueFourth] = useState(50);
  const [rangeValueFifth, setRangeValueFifth] = useState(25);

  const [english, setEnglish] = useState(100);
  const [german, setGerman] = useState(100);
  const [bulgarain, setBulgarian] = useState(100);
  const [turkidh, setTurkish] = useState(80);
  const [russian, setRussian] = useState(20);
  return (
    <div className="py-4">
      <h1 className="text-center font-semibold py-4 text-2xl mb-4">
        Languages
      </h1>
      <div className="flex justify-between px-4 rounded-lg shadow-md shadow-gray-600 rounded-xl bg-[#222C32]">
        <div className="px-6 pt-4 pb-8">
          <h1 className=" text-2xl mb-4 text-center">Coding</h1>
          <div className="pb-4">
            <p>
              JavaScript <span className="text-gray-300">90%</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per skill-1" per="90%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              TypeScript <span className="text-gray-300">75%</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per skill-2" per="75%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              CSS <span className="text-gray-300">100%</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per skill-3" per="100%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              PHP <span className="text-gray-300">50%</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per skill-4" per="55%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              Python <span className="text-gray-300">25%</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per skill-5" per="25%"></div>
            </div>
          </div>
        </div>
        <div className="px-6 pt-4 pb-8">
          <h1 className="text-2xl mb-4 text-center"> Human Languages</h1>
          <div className="pb-4">
            <p>
              English <span className="text-gray-300">Fluent</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per language-1" per="100%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              German <span className="text-gray-300">Fluent</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per language-2" per="100%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              Bulgarian <span className="text-gray-300">Fluent</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per language-3" per="100%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              Turkish <span className="text-gray-300">Bilingual</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per language-4" per="75%"></div>
            </div>
          </div>
          <div className="pb-4">
            <p>
              Russian <span className="text-gray-300">Basic</span>
            </p>
            <div className="skill-bar">
              <div className="skill-per language-5" per="20%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
