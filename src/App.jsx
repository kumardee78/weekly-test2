import Main from './components/Main.jsx'
import SideBar from './components/SideBar.jsx'

export default function () {
  return (
    <div className='lg:flex justify-between py-6 px-8'>
      <SideBar/>
      <Main/>
    </div>
  )
}
