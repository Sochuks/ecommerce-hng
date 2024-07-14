import { useContext } from 'react';
// SideBar context
import { SideBarContext } from '../contexts/SideBarContext';
// Cart COntext
import { CartContext } from '../contexts/CartContext';

// Icons
import {IoMdArrowForward} from 'react-icons/io'
import CartItem from './CartItem';
import { Stack } from '@mui/material';

const SideBar = () => {
    const { isOpen, handleClose } = useContext(SideBarContext);
    const { cart } = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'right-0' : 'hidden'} w-full bg-white fixed top-0 h-full shadow-2xl 
                    md:w-[35vw] xl:max-w-[30vw] pt-25 transition-all 
                    duration-300 z-20 px-4 lg:px-[35px] overflow-y-auto`}>
            {/* SideBar Header here */}
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='text-sm font-semibold'>Shopping Bag</div>
                <div>
                    <IoMdArrowForward onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center' />
                </div>

            </div>
            {/* SideBar Body */}
            <Stack  spacing={2}>
                {cart.map((item)=>{
                return <CartItem item={item} key={item.id} />
                })}
            </Stack>
        </div>
    );
};

export default SideBar;
