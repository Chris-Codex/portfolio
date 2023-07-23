import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div className="w-full lgl:w-1/2">
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-[#7aea39] tracking-[4px]">2015 - Present</p>
                    <h2 className="text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="onlyPass Technology Limited"
                        subTitle="Remote (Nov 22 - Present)"
                        result="Frontend Developer"
                        desc="I successfully designed and developed the user interface and user experience for the API Aggregator Web and Mobile application, using React and React Native respectively. By implementing the Tailwind CSS framework, I streamlined the design and styling of the app, resulting in a 30% reduction in development time and enhanced consistency across the product. I ensured that the application was fully responsive and compatible with various mobile devices and screen sizes. Working closely with UI/UX designers, I created visually appealing and responsive web applications."
                    />
                    <ResumeCard
                        title="Jarsoft ICT Solutions Limited"
                        subTitle="Owerri (Nov 2016 - Sep 2021)"
                        result="Frontend Developer"
                        desc="I utilized my crucial design software skills to assist in various projects, designing and developing web and mobile applications such as Travel Advisory, Quickmechs, Taxi-Ride, Frandora Management System, FOODSLOPE IOS, and Imo Transport app using React and React Native. I successfully implemented RESTful APIs, leveraging HTTP methods to fetch and update data from remote sources and seamlessly integrate with backend services. My expertise in building reusable components and automating testing led to a remarkable 20% reduction in development time. I provided valuable thought leadership and mentoring to agile cross-functional teams, facilitating rapid Web UI product delivery on both mobile and desktop platforms. Additionally, I constructed reusable reference implementations of target designs and conducted training sessions to empower teams in their use."
                    />
                </div>
            </div>

            <div className="w-full lgl:w-1/2">
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-[#7aea39] tracking-[4px]">2015 - 2016</p>
                    <h2 className="text-4xl font-bold">Intern Experience</h2>
                </div>
                <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="GreyFinch ICT Solutions "
                        subTitle="Lagos (March 2015 - October 2016)"
                        result="Frontend Developer"
                        desc="I actively contributed to the design and development of new web applications and websites. Collaborating closely with the team, I seamlessly integrated user interfaces, upgraded applications, and worked efficiently within the company's network. My strong organizational skills allowed me to prioritize tasks effectively, ensuring timely completion of assignments. Working closely with the design, product, and sales teams, I played a key role in building effective products that generated revenue. My proficiency in crucial design software skills further supported various projects, enhancing the overall success of the team's endeavors."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;