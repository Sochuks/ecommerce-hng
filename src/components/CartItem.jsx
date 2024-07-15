import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Cart COntext
import { CartContext } from '../contexts/CartContext';


// icons
import {IoMdClose, IoMdRemove, IoMdAdd} from 'react-icons/io'

const CartItem = ({item}) => {
    const{removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)

    const ImgUrl = 'https://api.timbu.cloud/images'
    const price = parseInt(item.current_price[0]?.NGN[0])
  return (
    <div className='flex gap-x-4 py-4 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
        
        <div className='min-h-[80px] flex items-center gap-x-4'>
            {/* Image */}
            <Link to={`/product/${item.id}`}>
                <img className='max-w-[80px]' src={`${ImgUrl}/${item.photos[0]?.url}`} alt="Cart Product Image" />
            </Link>
            {/* Text & Icon */}
            <div className='w-full flex flex-col gap-y-4' >
                {/* Title */}
                <Link className='text-sm' to={`/product/${item.id}`}>
                    {item.name}    
                </Link>
                <div className='flex items-center gap-x-2 text-sm' >
                    {/* Quantity */}
                    <div className='flex flex-1 max-w-[100px] items-center h-full border tex-priary' >
                        {/* Minus sign */}
                        <div onClick={()=>decreaseAmount(item.id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                           <IoMdRemove /> 
                        </div>
                        {/* amount */}
                        <div className='h-full flex justify-center items-center cursor-pointer'>
                            {item.amount}
                        </div>
                        {/* plus sign */}
                        <div onClick={()=>increaseAmount(item.id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                           <IoMdAdd /> 
                        </div>
                    </div>
                    <div className='flex-1 flex justify-between gap-x-4 items-center '>
                        <div className='flex-1 flex items-center'>{item.current_price[0]?.NGN[0]}</div>
                        {/* Get final price */}
                        <div className='flex-1 flex items-center text-primary font-medium'
                        >{`${parseFloat(price * item.amount).toFixed(2)}`}</div>
                    </div>
                    
                </div>
                
            </div>
            {/* Delete */}
            <button onClick={()=>removeFromCart(item.id)}>
                <IoMdClose className='text-gray-500 hover:text-red-500 transition-colors duration-300'/>
            </button>
        
        </div>
    </div>
  )
}

export default CartItem