import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'


const Banner = () => {


    return (
        <section id='home' className='w-full h-[800px] font-titleFont mt-20  py-20 flex border-b-[1px] border-b-black'>
            <LeftBanner />
            <RightBanner />
        </section>
    )
}

export default Banner