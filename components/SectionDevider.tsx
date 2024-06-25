"use client";

import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';
import { FaArrowDown } from 'react-icons/fa';

interface SectionDeviderProps {

}

const SectionDevider: FunctionComponent<SectionDeviderProps> = () => {
    return (
        <>
            <motion.div className='bg-gray-300 my-24 h-16 w-1 rounded-full hidden sm:block' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            </motion.div>
        </>
    );
}

export default SectionDevider;