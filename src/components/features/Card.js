import React from 'react'
import { HiArrowRight } from "react-icons/hi"

const Card = ({ title, desc, icons }) => {
    return (
        <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024]  transition-colors duration-100 group'>
            <div className='h-72 overflow-y-hidden hover:mt-10'>
                <div className='flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 translate-transform duration-500'>
                    <div>
                        <span className='text-5xl text-[#ff014f]'>{icons}</span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-xl md:text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
                        <p className='text-base'>{desc}</p>
                        <span className='text-2xl text-[#ff014f]'><HiArrowRight /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card