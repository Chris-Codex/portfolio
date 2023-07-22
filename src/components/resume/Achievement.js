import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { scrumImg } from "../../assets";


const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div className="w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-[#7aea39] tracking-[4px]">May 3, 2023</p>
                    <h2 className="text-4xl font-bold">Professional Certificate</h2>
                </div>
                <div className="mt-[180px] w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Professional Scrum Master I"
                        subTitle="Certified Scrum Master"
                        result="Certified"
                        desc="I have successfully earned the Professional Scrum Master I certification, validating my comprehensive understanding and mastery of Scrum principles and practices. With this certification, I possess the expertise to lead and guide agile development teams, ensuring successful project deliveries and effective collaboration. My proficiency in Scrum roles, events, artifacts, and techniques enables me to drive continuous improvement and maximize value creation for projects. Having completed rigorous training and examination, I am well-versed in facilitating Scrum events, fostering self-organizing teams, and promoting iterative development. "
                    />
                </div>
            </div>

            <div className="w-1/2">
                <div className="mt-[230px] w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <img src={scrumImg} alt="Scrum Certificatte" />
                </div>
            </div>

        </motion.div>
    );
};

export default Achievement;