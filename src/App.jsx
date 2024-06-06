import Main from './components/Main.jsx'
import SideBar from './components/SideBar.jsx'

export default function () {
  return (
    <div className='flex justify-between py-2 px-8 h-full bg-black'>
      <SideBar/>
      <Main/>
    </div>
  )
}
