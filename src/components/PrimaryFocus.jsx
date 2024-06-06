

export default function PrimaryFocus() {
  return (
    <div className=" pb-6">
        <h2 className="text-center font-semibold text-2xl py-4 mb-4">Primary Focus</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="w-[40%] h-[10rem] shadow-md shadow-gray-600 rounded-xl flex gap-2 bg-[#222C32] py-4 px-4 mb-2">
            <div></div>
            <div>
              <h3 className="font-semibold text-lg">Web Design & Development</h3>
              <p className="text-gray-400 mt-2">
                Creating attractive, easy-to-use websites that work well for
                businesses and individuals online.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-[10rem] shadow-md shadow-gray-600 rounded-xl flex gap-2 bg-[#222C32] py-4 px-4 mb-2">
            <div></div>
            <div>
              <h3 className="font-semibold text-lg">Full-Stack Solutions</h3>
              <p className="text-gray-400 mt-2">
                Developing scalable web applications using JavaScript
                Frameworks, SQL Databases, PHP and Python.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-[10rem] shadow-md shadow-gray-600 rounded-xl flex gap-2 bg-[#222C32] py-4 px-4 mb-2">
            <div></div>
            <div className="">
              <h3 className="font-semibold text-lg">Mobile Apps & Games</h3>
              <p className="text-gray-400 mt-2">
                Creating and developing engaging mobile apps and games for iOS
                and Android devices.
              </p>
            </div>
          </div>
          <div className="w-[40%] h-[10rem] shadow-md shadow-gray-600 rounded-xl flex gap-2 bg-[#222C32] py-4 px-4 mb-2">
            <div></div>
            <div className="">
              <h3 className="font-semibold text-lg">Marketing & SEO</h3>
              <p className="text-gray-400 mt-2">
                Using SEO and marketing strategies to boost online visibility
                and promote products or services.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
