import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'


const Banner = () => {


    return (
        <section id='home' className='w-full font-titleFont border-b-[1px] border-b-black gap-28 pt-10 pb-20 flex flex-col xl:gap-0  lgl:mt-20 lgl:flex-row'>
            <LeftBanner />
            <RightBanner />
        </section>
    )
}

export default Banner