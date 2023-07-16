import React from 'react'
import { bannerImg } from '../../assets'

const RightBanner = () => {
    return (
        <div className='relative w-1/2 flex justify-end items-center'>
            <img className='w-[500px] h-[680px] mt-[-110px] z-10' src={bannerImg} alt='banner-image' />
            <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
        </div>
    )
}

export default RightBanner