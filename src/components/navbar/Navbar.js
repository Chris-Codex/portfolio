import React from 'react'
import { logo } from "../../assets/index"
import { navLinksData } from '../../constants'


const Navbar = () => {
    return (
        <div className='w-full h-20 mx-auto flex justify-between items-center font-titleFont'>
            <div className=''>
                <img src={logo} alt='logo' />
            </div>
            <div className=''>
                <ul className='flex items-center gap-10'>
                    {
                        navLinksData.map((navlink) => {
                            const { _id, title, link } = navlink
                            return (
                                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' key={_id}>{title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar