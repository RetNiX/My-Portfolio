"use client";

import { FunctionComponent, useState } from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/serverActions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    const { ref } = useSectionInView("Contact");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Prevents multiple submissions

    return (
        <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center -mt-6' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            <SectionHeading>Contact me</SectionHeading>
            {!isSubmitted ? (
                <>
                    <p className='text-gray-700 dark:text-gray-100'>Please contact me directly <a href="mailto:kochick16@gmail.com" className='underline'>here</a> or through this form.</p>
                    <form className='mt-10 flex flex-col' action={async (formData) => {
                        const { error } = await sendEmail(formData);
                        if (error) {
                            toast.error(error);
                            console.log(error)
                            return;
                        }
                        if (isSubmitted) {
                            toast.error("Please wait a moment before submitting again.");
                            console.log(isSubmitted)
                            return;
                        }
                        console.log(isSubmitted)
                        toast.success("Message sent successfully! I'll get back to you soon.");
                        setIsSubmitted(true);
                        setTimeout(() => {
                            setIsSubmitted(false);
                        }, 120000); // 2 minutes to wait after submiting a form
                    }}>
                        <input type="email" className='h-14 rounded-xl borderBlack px-4 dark:text-gray-800 dark:border-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all' placeholder='Your email' required maxLength={500} name="senderEmail" />
                        <textarea className='h-52 my-3 p-4 borderBlack rounded-xl dark:text-gray-800 dark:border-white dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all' placeholder='Your message' required maxLength={5000} name="msg" />
                        <SubmitBtn isSubmitted={isSubmitted} />
                    </form>
                </>
            ) : (
                <p className='bg-emerald-200 flex justify-center items-center py-4 px-4 rounded-full'><FaCheckCircle className='justify-end text-xl text-green-500' /><span className='text-green-800 font-bold mx-4'>Thank you. I&apos;ll get back to you as soon as possible !</span></p>
            )}
        </motion.section>
    );
}

export default Contact;