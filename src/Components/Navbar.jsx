import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className='flex  flex-row pt-[20px] w-full bg-pink-100 text-black top-0 sticky font-montserrat font-medium'>
        <div className='flex pl-[50px] text-2xl text-blue-800'>Portfolio</div>
        <ul className='flex flex-row justify-between items-center m-[auto] 2xl:text-[40px]
          xl:m-[auto] xl:text-[20px] mr-[450px] font-montserrat font-medium
          md:justify-between md:items-center md:m-auto max-sm:hidden'>
        <li className='mx-[30px] font-semibold text-blue-800 hover:text-blue-800 hover:cursor-pointer hover:font-semibold'>About</li>
        <li className='mx-[30px]  hover:text-blue-800 hover:cursor-pointer '>Skills</li>
        <li className='mx-[30px]  hover:text-blue-800 hover:cursor-pointer'>Projects</li>
        <li className='mx-[30px]  hover:text-blue-800  hover:cursor-pointer'>Blogs</li>
        <li className='mx-[30px]  hover:text-blue-800  hover:cursor-pointer'>Contacts</li>

        </ul>
        <button className='h-[30px] w-[80px] shadow-xl rounded-md mr-[100px] bg-blue-700 text-white'>LinkedIn</button>
     </nav> 
    </>
  )
}

export default Navbar
