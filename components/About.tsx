"use client";

import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {

    const { ref } = useSectionInView("About");
    return (
        <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-9 sm:mb-40 scroll-mt-28' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} id="about">
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3'>
                After graduating with a degree in <b>Molecular Biology</b>, I decided to pursue after my life hobby and make it my profession - programming.
                I enrolled in a Full-Stack web development course at HackerU, which taught me the fundamentals of web development and gave me the tools to learn and grow as a developer.
                My favorite part of programming is the problem-solving aspect. I <u>love</u> the feeling of finally figuring out a solution to a problem.<br />
                My core stacks are: <b>React.Ts, Node.js, MongoDB</b> and currently discovering the world of Next.js.<br />
                I&apos;m currently searching for a job as Front-end | Back-end developer.
            </p>
            <p className=''>
                Other than coding, I enjoy playing some video games, and exploring new technology advancements in the world as its my passion to <b>learn new things.</b>
            </p>
        </motion.section>
    );
}

export default About; 