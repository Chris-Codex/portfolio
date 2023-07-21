import React from 'react'
import Title from '../layouts/Title'
import ResumeCard from './ResumeCard';


const Skills = () => {
    return (
        <section className='w-full mt-20'>
            <div className='flex items-center justify-center text-center'>
                <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" desc="Technical Skills" />
            </div>
            <div className='flex gap-20'>
                <div className='w-1/2'>
                    <div className='py-12 font-titleFont'>
                        <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
                        <p className='text-4xl font-bold'>Education Quality</p>
                    </div>
                    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-[#000] border-opacity-30 flex flex-col gap-10'>
                        <ResumeCard
                            title="AS - Science & Information"
                            subTitle="Spetriu College (2001 -2005)"
                            result="4.7645"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        />
                        <ResumeCard
                            title="AS - Science & Information"
                            subTitle="Spetriu College (2001 -2005)"
                            result="4.7645"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        />
                        <ResumeCard
                            title="AS - Science & Information"
                            subTitle="Spetriu College (2001 -2005)"
                            result="4.7645"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        />
                    </div>
                </div>

                <div className='w-1/2'>
                    <div className='py-12 font-titleFont'>
                        <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
                        <p className='text-4xl font-bold'>Job Experience</p>
                    </div>
                    <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-[#000] border-opacity-30 flex flex-col gap-10'>
                        <ResumeCard
                            title="AS - Science & Information"
                            subTitle="Spetriu College (2001 -2005)"
                            result="4.7645"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        />
                        <ResumeCard
                            title="AS - Science & Information"
                            subTitle="Spetriu College (2001 -2005)"
                            result="4.7645"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        />
                        <ResumeCard
                            title="AS - Science & Information"
                            subTitle="Spetriu College (2001 -2005)"
                            result="4.7645"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills