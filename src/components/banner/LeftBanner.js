import React from 'react'
import Media from '../media/Media';
import { Cursor, useTypewriter } from 'react-simple-typewriter';



const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ['Professional Developer.', 'Frontend Developer.'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });
    return (
        <div className='w-1/2 flex flex-col mt-20 gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY PORTFOLIO</h4>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm <span className='text-designColor capitalize'>Christian Iheacho</span></h1>
                <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font font-bodyFont leading-6 tracking-wide'>
                    I'm a passionate frontend developer with a keen eye for design and a strong focus on creating seamless user experiences. With [number] years of experience in the industry, I specialize in crafting responsive and interactive websites using modern web technologies
                </p>
            </div>
            <Media />
        </div>
    )
}

export default LeftBanner