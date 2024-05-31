import Typewriter from 'typewriter-effect';
import {Bio} from "../Data/Constant.js"
const About = () => {
  
 

  return (
    <>
      <section className=' font-montserrat bg-slate-50 p-[10px_36px]'>
        <div className="w-full h-[auto] flex max-lg:flex-row  max-md:flex-col max-sm:flex-col justify-center item-center content-center space-y-3">
          <div className='md:ml-[50px] md:w-[800px] flex justify-center items-center content-center '>
            <img className='rounded-full md:h-[400px] md:min-w-[300px] h-[300px] m ' src="/file.png" alt="" />
          </div>
          <div> 
          <div>
            <div className='md:items-start md:text-[50px] md:gap-5  md:mt-[50px] md:ml-10   flex font-montserrat flex-col justify-center content-center items-center text-3xl font-bold'>
              <span className="">Hi, I am </span>
              <span>{Bio.name}</span>
              <span className='flex gap-2 md:mt-[0px] mt-[20px] text-xl md:text-[25px]'>I am <span className='text-navy'> 
              <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></span>
              </span>
            </div>
          </div>
            <div className='flex flex-col mx-[40px] mt-[30px] text-[18px] justify-center content-center items-center text-center 
            md:items-start md:text-start text-gray-600 w-[85%] space-y-[-1px]'>
              With a year-long journey in the realm of data science,
                I've dived deep into Python's coding magic and mastered SQL.
                From taming machine learning algorithms to exploring the depths of deep learning techniques,
                I'm on a quest to unravel the mysteries of data!
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
