import React from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'


const Resume = () => {
    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex items-center justify-center text-center'>
                <Title title="5 YEARS OF EXPERIENCE" desc="My RESUME" />
            </div>
            <div>
                <ul className='w-full grid grid-cols-4'>
                    <li className='resumeLi'>Education</li>
                    <li className='resumeLi'>Professional Skills</li>
                    <li className='resumeLi'>Experience</li>
                    <li className='resumeLi'>Achievements</li>
                </ul>
            </div>
            <Education />
            {/* <Skills /> */}
        </section>
    )
}

export default Resume