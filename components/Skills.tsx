"use client";

import { FunctionComponent } from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

interface SkillsProps {

}
// To make it shorter with framer motion
const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
            type: "spring"
        }
    })
}

const Skills: FunctionComponent<SkillsProps> = () => {
    const { ref } = useSectionInView("Skills");
    return (
        <section ref={ref} className='mb-28 max-w-[50rem] scroll-mt-28 sm:mb-40' id="skills">
            <SectionHeading>My skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li key={index} className='bg-white border border-black/[0.3] rounded-xl px-5 py-3 relative overflow-hidden dark:bg-white/25 dark:text-white' variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index}>
                        {skill.name}
                        {skill.isNew && (
                            <span className='absolute top-0 right-0 h-6 w-24 bg-red-600 text-white text-xs font-bold flex items-center justify-center transform rotate-45 translate-x-[39%] translate-y-[5%]'>
                                New
                            </span>
                        )}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;