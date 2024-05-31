import React, { useState } from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [open,setOpen] = useState(false);
  const HandleOpen = ()=>{
    setOpen(!open);
    console.log(open);
  }
  return (
    <>
     <nav className='p-[16px_50px] flex justify-between  flex-row pt-[15px] w-full bg-slate-50 pb-[10px]
      text-black top-0 sticky font-montserrat font-medium'>
        <div className='flex pl-[30px] font-semibold text-2xl text-blue-800'><DiCssdeck className='text-[40px]'/><span className='mt-[5px]'>Portfolio</span></div>
        <div className="md:hidden flex mr-[20px] text-2xl ">
        <FaBars className="text-dark_blue" onClick={HandleOpen}  />
        </div>

          
        <ul className='max-md:hidden flex flex-row justify-center items-center text-center  
          xl:m-[auto] xl:text-[16px] w-[80%] font-montserrat font-medium
          '>
        <li className='mx-[20px] font-semibold text-blue-800 hover:text-blue-800 hover:cursor-pointer hover:font-semibold'>About</li>
        <li className='mx-[20px]  hover:text-blue-800 hover:cursor-pointer '>Skills</li>
        <li className='mx-[20px]  hover:text-blue-800 hover:cursor-pointer'>Projects</li>
        <li className='mx-[20px]  hover:text-blue-800  hover:cursor-pointer'>Blogs</li>
        <li className='mx-[20px]  hover:text-blue-800  hover:cursor-pointer'>Contacts</li>

        </ul>
        <button className='max-md:hidden h-[40px] w-[100px] shadow-xl rounded-md mr-[100px] bg-blue-700 text-white'>LinkedIn</button> 
     </nav> 
     {open &&  <div className='flex flex-col shadow-black shadow- justify-center gap-[18px] absolute top-[50px]  right-0 w-[100%] pt-[12px] pr-[40px] pb-[24px] pl-[40px]
      transition-all delay-[0.6s] ease-in-out bg-opacity-25 bg-red-50 z-[1000]   font-montserrat
     '>
        <ul className='flex flex-col gap-2 transition-all ease-in delay-200'>
          <li className=" transition-all delay-[0.6s] ease-in-out mx-[20px] font-semibold  hover:text-blue-800 hover:cursor-pointer hover:font-semibold" >About</li>
          <li className=" transition-all delay-[0.6s] ease-in-out mx-[20px] font-semibold  hover:text-blue-800 hover:cursor-pointer hover:font-semibold">Skills</li>
          <li className=" transition-all delay-[0.6s] ease-in-out mx-[20px] font-semibold  hover:text-blue-800 hover:cursor-pointer hover:font-semibold">Projects</li>
          <li className=" transition-all delay-[0.6s] ease-in-out mx-[20px] font-semibold  hover:text-blue-800 hover:cursor-pointer hover:font-semibold">Blogs</li>
          <li className=" transition-all delay-[0.6s] ease-in-out mx-[20px] font-semibold  hover:text-blue-800 hover:cursor-pointer hover:font-semibold">Contacts</li>
        </ul>
     </div>}
    </>
  )
}

export default Navbar
