"use client"; // Because of the use of framer-motion

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaArrowAltCircleRight, FaGithubSquare } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { useActiveSection } from '@/components/ActiveSectionContext';
import { useSectionInView } from '@/lib/hooks';

interface IntroProps {

}

const Intro: FunctionComponent<IntroProps> = () => {

    const { ref } = useSectionInView("Home", 0.5);
    let { setActiveSection, setTimeLastClick } = useActiveSection();

    return (
        // Better section tag than div
        <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id="home">
            <div className="flex items-cetner justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <Image src="/myPhoto.png" alt="Jonathan Greenerg protrait" width="200" height="200" quality="95" priority={true}
                            className="rounded-full h-44 w-44 border-[0.35rem] border-white object-cover shadow-xl" />

                    </motion.div>
                    <motion.span className='absolute bottom-0 left-0 text-4xl' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.3, duration: 0.7 }}>👋</motion.span>
                </div>
            </div>
            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className='text-3xl'>Hello,</span> <b>I&apos;m Jonathan Greenberg</b>, a <b>Full-Stack developer.</b>
                With a strong foundation in both front-end and back-end development,
                I thrive on tackling new challenges and continuously learning. <b>Welcome to my Portfolio !</b>
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                {/* Contact Link */}
                <Link href="#contact" className='group bg-blue-500 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-indigo-800 active:scale-105 transition' onClick={() => { setActiveSection("Contact"); setTimeLastClick(Date.now()) }}>Contact Me Here <FaArrowAltCircleRight className='text-xl group-hover:translate-x-2 transition' /></Link>
                {/* Donwload CV Link */}
                <a href="/Jonathan Greenberg CV.pdf" download className='group bg-red-400 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-rose-600 active:scale-105 transition cursor-pointer'>Download CV <FiDownload className='text-xl group-hover:translate-y-1 transition' /></a>
                {/* Linkedin Link */}
                <a href="https://www.linkedin.com/in/joni-greenberg/" target="_blank" className='group bg-red-400 text-gray-700 text-[1.4rem] p-4 flex items-center gap-3 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-rose-600 active:scale-105 transition'><BsLinkedin /></a>
                {/* Github Link */}
                <a href="https://github.com/RetNiX" target="_blank" className='group bg-red-400 text-gray-700 text-[1.4rem] p-4 flex items-center gap-3 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-rose-600 active:scale-105 transition'><FaGithubSquare /></a>
            </motion.div>
        </section>
    );
}

export default Intro;