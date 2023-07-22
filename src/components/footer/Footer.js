import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index"

const Footer = () => {
    return (
        <div className="w-full py-20 h-auto border-b-[1px] border-b-black flex gap-8">
            <div className="w-full h-full flex flex-col items-center justify-center gap-8">
                <img className="w-32" src={logo} alt="logo" />
                <p>&copy;2023. All rights reserved by Christian Iheacho</p>
            </div>



        </div>
    );
}

export default Footer