import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
            <div className='w-full xl:w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-[#ff014f] tracking-[4px]'>2021 - 2022</p>
                    <p className='text-4xl font-bold'>Master's Degree</p>
                </div>
                <div className='lgl:mt-14 w-full h-auto border-l-[6px] border-l-[#000] border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="M.Sc - Computing"
                        subTitle="Griffith College, Ireland (2021 -2022)"
                        result="Second Class Upper Honors"
                        desc="As an M.Sc. Computing graduate from Griffith College, Ireland, with Second Class Upper Honors, I have gained advanced expertise in various areas of computing and information technology. Throughout my studies, I have honed my skills in software development, data analysis, cybersecurity, artificial intelligence, and more. My postgraduate education has equipped me with the latest industry knowledge and best practices, making me well-prepared to tackle complex technological challenges and contribute to cutting-edge projects in the dynamic world of computing. "
                    />
                </div>
            </div>

            <div className='w-full xl:w-1/2'>
                <div className='py-12 font-titleFont'>
                    <p className='text-sm text-[#ff014f] tracking-[4px]'>2008 - 2012</p>
                    <p className='text-4xl font-bold'>Bachelors Degree</p>
                </div>
                <div className='lgl:mt-14 w-full h-auto border-l-[6px] border-l-[#000] border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="B.Sc - Computer Science"
                        subTitle="Imo State University (2008 -2012)"
                        result="Second Class Upper Honors"
                        desc="As a B.Sc. Computer Science graduate from Imo State University, I hold a Second Class Upper Honors, showcasing my dedication to academic excellence and strong technical knowledge in the field of Computer Science. My education has equipped me with a solid foundation in various aspects of computer science, including programming, software development, algorithms, data structures, and more."
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education