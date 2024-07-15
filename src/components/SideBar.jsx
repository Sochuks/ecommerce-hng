import { useContext } from 'react';
import { Stack } from '@mui/material';

// context
import { SideBarContext } from '../contexts/SideBarContext';
import { CartContext } from '../contexts/CartContext';
//components
import CartItem from './CartItem';
// Icons
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import { Link } from 'react-router-dom';





const SideBar = () => {
    const { isOpen, handleClose } = useContext(SideBarContext);
    const { cart, clearCart, total } = useContext(CartContext);

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
            {/* SideBar Bottom */}
            <div className='flex w-full justify-between items-center'>
                {/* Total */}
                <div className='uppercase font-semibold'>
                    <span>Total:</span> N{parseFloat(total).toFixed(2)}
                </div>
                {/* Clear Cart */}
                <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                    <FiTrash2 />
                </div>
            </div>
            <Stack spacing={3} mt={5}>
                <Link to="/cart" 
                    className="bg-gray-200 rounded-3xl flex p-4 justify-center
                                item-center text-primary w-ful font-medium">View Cart</Link>
                <Link to="/checkout"
                    className="btn-product text-center"
                >Checkout</Link>
            </Stack>
        </div>
    );
};

export default SideBar;
