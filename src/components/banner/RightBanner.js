import React from 'react'
import { bannerImg } from '../../assets'
import { bannersImg } from '../../assets'

const RightBanner = () => {
    return (
        <div className='relative w-full lgl:w-1/2 flex justify-center items-center lgl:justify-end lgl:items-center'>
            <img className='w-[300px] h-[400px] lgl:w-[430px] lgl:h-[600px] mt-[-36px] z-10 rounded-bl-[20px] rounded-br-[20px]' src={bannersImg} alt='banner-image' />
            <div className='absolute bottom-0 w-[350px] h-[300px] lgl:w-[430px] lgl:h-[500px]  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
        </div>
    )
}

export default RightBanner