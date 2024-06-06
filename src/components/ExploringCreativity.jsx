export default function ExploringCreativity() {
  return (
    <div className="">
      <h1 className="text-center font-semibold py-4 text-2xl mb-4">Exploring Creativity</h1>
      <div className="flex  flex-wrap gap-4 items-center justify-center">
        <div className="w-[40%] h-[10rem] shadow-md shadow-gray-600 rounded-xl flex gap-2 bg-[#222C32] py-4 px-4 mb-2">
          <div></div>
          <div>
            <h3 className="font-semibold text-lg">Visual Storytelling</h3>
            <p className="text-gray-400 mt-2">
              Taking and editing photos or videos that tell engaging stories,
              bringing concepts and ideas to life visually
            </p>
          </div>
        </div>
        <div className="w-[40%] h-[10rem] shadow-md shadow-gray-600 rounded-xl flex gap-2 bg-[#222C32] py-4 px-4 mb-2">
          <div></div>
          <div>
            <h3 className="font-semibold text-lg">Digital Content Creation</h3>
            <p className="text-gray-400 mt-2">
              Creating digital elements, such as 3D models, graphics,
              animations, videos and AI-generated content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
