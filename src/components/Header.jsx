import React from 'react'

export default function Header() {
  return (
    <div className='absolute top-0 right-0 py-6 px-10 bg-[#222C32] rounded-se-2xl rounded-es-2xl'>
      <ul className='flex justify-between gap-6 text-lg'>
        <li className='text-blue-500'>About</li>
        <li className='hover:text-blue-500'>Certificates</li>
        <li className='hover:text-blue-500'>Projects</li>
        <li className='hover:text-blue-500'>More</li>
        <li className='hover:text-blue-500'>Contact</li>
      </ul>
    </div>
  )
}
