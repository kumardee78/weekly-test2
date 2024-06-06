import HourglassEmptySharpIcon from '@mui/icons-material/HourglassEmptySharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';





export default function SideBar() {
  return (
    <>
      <div className="p-6 w-[22%] shadow-gray-900 shadow-lg rounded-2xl my-4 bg-[#1f1f1f]">
        <div className="text-center mb-6">
          <p className='w-[85%] mx-auto'><img src="download.jpg" alt="" className="w-[100%]  rounded-full"/></p>
          <h3 className="text-xl text-white font-bold my-4">Oktay Shakirov</h3>
          <button type="button" className="rounded-2xl shadow-white shadow-md px-8 py-1 my-2 bg-[#215666] text-white">Hello, World!</button>
        </div>
        <hr className="border-1 border-black"/>
        <div className='pt-3'>
          <div className='flex items-center gap-4 my-6'>
            <span className='rounded-xl shadow-lg shadow-gray-700 py-3 px-3 bg-[#222C32] text-yellow-500'><HourglassEmptySharpIcon/></span>
            <div>
              <p className='text-[#22c4f1]'>Age</p>
              <p className='text-white'>29 years old</p>
            </div>
          </div>
          <div className='flex items-center gap-4 my-4'>
            <span className='rounded-xl shadow-lg shadow-gray-700 py-3 px-3 bg-[#222C32] text-yellow-500'><LocationOnSharpIcon/></span>
            <div>
              <p className='text-[#22c4f1]'>LOCATION</p>
              <p className='text-white'>Berlin, Germany</p>
            </div>
          </div>
          <div className='flex items-center gap-4 my-4'>
            <span className='rounded-xl shadow-lg shadow-gray-700 py-3 px-3 bg-[#222C32] text-yellow-500'><PersonIcon/></span>
            <div>
              <p className='text-[#22c4f1]'>PERSONALITY TYPE</p>
              <p className='text-white'>INTJ-T</p>
            </div>
          </div>
          <div className='pt-4 flex gap-6 w-[90%] mx-auto'>
          <InstagramIcon/>
          <GitHubIcon/>
          <LinkedInIcon/>
          <TwitterIcon/>
          </div>
        </div>
      </div>
    </>
  );
}
