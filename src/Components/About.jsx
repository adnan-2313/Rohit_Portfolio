import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
    // const [text] = useTypewriter({
    //     words: ["Hey, I am"],
    //     loop: {},
    //   });
    // const [text1] = useTypewriter({
    //     words: ["Rohit Kumar"],
    //     loop: {},
    //   });
  return (
    <>
    <section className='font-serif flex flex-row justify-center '>
        <div className="font-serif relative h-[auto] w-full flex flex-row justify-center item-center bg-gradient-to-br from-yellow-50 via-pink-100 to-blue-100 ">
            <div className='absolute flex flex-col right-[300px] mt-[100px] text-dark_blue text-[60px] font-semibold '>
            <span>Hey, I am </span>
            <span>Rohit Kumar</span>
            {/* <span>Data Enthusiast</span> */}
            </div>
          <div className='font-montserrat relative w-[40%] mt-[280px] ml-[500px]'>
         <p>
          With a year-long journey in the realm of data science, 
          I've dived deep into Python's coding magic and mastered SQL.
          From taming machine learning algorithms to exploring the depths of deep learning techniques, 
          I'm on a quest to unravel the mysteries of data!
         </p>
         <button className='h-[30px] w-[80px] my-[20px] shadow-xl rounded-md mr-[100px] bg-blue-700 text-white'>Hire Me</button>
          </div>

        </div> 
    </section>
    </>
  )
}

export default About
