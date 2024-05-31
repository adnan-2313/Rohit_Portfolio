import { skills } from "../Data/Constant"
const Skill = () => {
  return (
    <>
      <section className="h-auto w-full bg-gradient-to-r from-white via-pink-50  to-slate-50">
        <div className="flex flex-col font-montserrat flex-wrap justify-center text-center">
            <h1 className="font-bold  text-[42px]">Skills</h1>
             <p>Here are some skills on which I have been working for couple of years</p>    
        </div>
        <div className="w-full flex flex-wrap mt-[30px] gap-[30px] justify-center">
        {skills.map((skill)=>(
            <div key={skill} className="max-tablet:max-w-[400px] max-tablet:p-[10px_36px] max-xs:max-w-[330px] max-xs:p-[10px_36px] w-full max-w-[500px] border-[0.1px] bg-slate-50 border-blue-500 rounded-[16px] p-[18px_36px] shadow-[0px_4px_24px] shadow-blue-300">
                <div className="text-[28px] font-semibold mb-[20px] text-center">{skill.title}</div>
                <div className="flex justify-center flex-wrap gap-[12px] mb-[20px]">
                    {skill.skills.map((item)=>(
                        <div key={item} className="max-tablet:text-[14px] max-tablet:p-[8px_12px] max-xs:text-[14px] max-xs:p-[6px_12px] text-[16px] font-medium border-[1px] border-gray-400 rounded-[12px] p-[12px_16px] flex items-center justify-center gap-[8px]">
                            <img className="w-[24px] h-[24px]" src={item.image}/>{item.name}
                        </div>
                    ))}
                </div>
            </div>
        ))}
        </div>
      </section>
    </>
  )
}

export default Skill
