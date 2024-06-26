import { FunctionComponent } from 'react';
import { useFormStatus } from 'react-dom';
import { FaRegPaperPlane } from 'react-icons/fa6';

interface SubmitBtnProps {
    isSubmitted: boolean;
}

const SubmitBtn: FunctionComponent<SubmitBtnProps> = ({isSubmitted}) => {
    const { pending } = useFormStatus();
    return (
        <>
            <button disabled={isSubmitted || pending} type="submit" className='group flex items-center justify-center gap-3 h-[3rem] w-[8rem] text-white rounded-full outline-none bg-blue-500 transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-indigo-800 disabled:scale-100 disabled:bg-opacity-65'>
                {pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : 
                <>Send <FaRegPaperPlane className='text-sm transition-all group-hover:translate-x-2 group-hover:-translate-y-1' /></>}
            </button>
        </>
    );
}

export default SubmitBtn;