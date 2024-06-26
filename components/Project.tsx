"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { FunctionComponent, useRef } from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];


const Project: FunctionComponent<ProjectProps> = ({ title, description, tags, imageUrl }) => {
    let ref = useRef<HTMLDivElement>(null);
    let { scrollYProgress } = useScroll({
        target: ref, // where it starts
        offset: ["0 1", "1.33 1"] // at what point you start the animation
    });
    let scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    let opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    return (
        <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className='group mb-3 sm:mb-8 last:mb-0'>
            <section className='bg-gray-100 max-w-[42rem] rounded-lg borderBlack overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:border-white dark:text-white dark:bg-white/10 dark:hover:bg-white/30'>
                <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-[1.8rem] sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                    <h3 className='text-2xl font-semibold dark:text-white/80'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white' key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt="Project I developed" quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28rem] rounded-t-lg shadow-2xl 
        group-even:right-[initail] 
        group-even:-left-40 
        group-hover:-translate-x-3 
        group-hover: translate-y-3 
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        group-hover:scale-105 transition' />
            </section>
        </motion.div>
    );
}

export default Project;