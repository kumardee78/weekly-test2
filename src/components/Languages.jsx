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
      <h1 className="text-center font-semibold py-4 text-2xl mb-4">Languages</h1>
      <div className="flex justify-between px-4 rounded-lg shadow-md shadow-gray-600 rounded-xl bg-[#222C32]">
        <div className="px-6 pt-4 pb-8">
          <h1 className=" text-2xl mb-4 text-center">Coding</h1>
          <div>
            <p>
              JavaScript <span className="text-gray-300">90%</span>
            </p>
            <input
              type="range"
              name=""
              id=""
              value={rangeValueOne}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>
              TypeScript <span className="text-gray-300">75%</span>
            </p>
            <input
              type="range"
              name=""
              id=""
              value={rangeValueTwo}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>
              CSS <span className="text-gray-300">100%</span>
            </p>
            <input
              type="range"
              name=""
              id=""
              value={rangeValueThree}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>
              PHP <span className="text-gray-300">50%</span>
            </p>
            <input
              type="range"
              name=""
              id=""
              value={rangeValueFourth}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>
              Python <span className="text-gray-300">25%</span>
            </p>
            <input
              type="range"
              name=""
              id=""
              value={rangeValueFifth}
              className="w-[20rem]"
            />
          </div>
        </div>
        <div className="px-6 pt-4 pb-8">
          <h1 className="text-2xl mb-4 text-center"> Human Languages</h1>
          <div>
            <p>English <span className='text-gray-400'>Fluent</span></p>
            <input
              type="range"
              name=""
              id=""
              value={english}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>German <span className='text-gray-400'>Fluent</span></p>
            <input
              type="range"
              name=""
              id=""
              value={german}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>Bulgarian <span className='text-gray-400'>Fluent</span></p>
            <input
              type="range"
              name=""
              id=""
              value={bulgarain}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>Turkish <span className='text-gray-400'>Bilingual</span></p>
            <input
              type="range"
              name=""
              id=""
              value={turkidh}
              className="w-[20rem]"
            />
          </div>
          <div>
            <p>Russian <span className='text-gray-400'>Basic</span></p>
            <input
              type="range"
              name=""
              id=""
              value={russian}
              className="w-[20rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
