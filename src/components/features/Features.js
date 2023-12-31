import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai"
import { SiProgress } from "react-icons/si"
import { FaGlobe, FaMobile } from "react-icons/fa"
import { SiAntdesign } from "react-icons/si"

const Features = () => {
    return (
        <section id='features' className='w-full h-auto pt-10 py-20 border-b-[1px] border-b-black'>
            <Title title="Features" desc="What I Do" />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
                <Card
                    title="Web Development"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum has been"
                    icons={<AiFillAppstore />}
                />
                <Card
                    title="Mobile Development"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum has been"
                    icons={<FaMobile />}
                />
                <Card
                    title="Hosting Websites"
                    desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum has been"
                    icons={<FaGlobe />}
                />
            </div>
        </section>
    )
}

export default Features