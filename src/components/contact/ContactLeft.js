import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Christian Iheacho</h3>
                <p className="text-lg font-normal text-gray-400">
                    Frontend Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    Experienced Frontend Developer proficient in creating high-performance, user-centric websites and web applications. Skilled in using modern web technologies, such as HTML, CSS, JavaScript, and React, to deliver seamless and visually appealing user experiences. Passionate about implementing responsive designs, optimizing performance, and ensuring cross-browser compatibility.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+353899765434</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">christianiheacho1@outlook.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                        <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft