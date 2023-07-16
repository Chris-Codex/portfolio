import React from 'react'
import { Link } from "react-scroll"
import { logo } from "../../assets/index"
import { navLinksData } from '../../constants'


const Navbar = () => {
    return (
        <div className='w-full h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div className=''>
                <img src={logo} alt='logo' />
            </div>
            <div className=''>
                <ul className='flex items-center gap-10'>
                    {
                        navLinksData.map((navlink) => {
                            const { _id, title, link } = navlink
                            return (
                                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' key={_id}>
                                    <Link
                                        activeClass='active'
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >{title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar