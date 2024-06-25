import { FunctionComponent } from 'react';

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className='mb-10 px-4 text-center text-gray-600 dark:text-gray-100'>
            <small className='mb-4 block text-sm font-semibold'>
                &copy; 2024 Joni.G. All rights reserved.
            </small>
            <p className='text-sm'>
                Built with 💚 using React.Ts, Next.Js & Framer Motion.
            </p>
        </footer>
    );
}

export default Footer;