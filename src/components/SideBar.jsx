import { useContext } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';

// Icons
import {IoMdArrowForward} from 'react-icons/io'

const SideBar = () => {
    const { isOpen, handleClose } = useContext(SideBarContext);

    return (
        <div className={`${isOpen ? 'right-0' : 'hidden'} w-full bg-white fixed top-0 h-full shadow-2xl 
                    md:w-[35vw] xl:max-w-[30vw] pt-25 transition-all 
                    duration-300 z-20 px-4 lg:px-[35px]`}>
            {/* SideBar content here */}
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='text-sm font-semibold'>Shopping Bag</div>
                <div>
                    <IoMdArrowForward onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center' />
                </div>

            </div>
        </div>
    );
};

export default SideBar;
