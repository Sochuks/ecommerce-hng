import React from 'react'
import PropTypes from 'prop-types';

import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Icons
import { FiMinusCircle,FiPlusCircle  } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = ({title, price, image}) => {
    const theme = useTheme();

    const ButtonSX = {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50px',
        color: 'white',
        padding: '10px 20px'
    };

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100%',
    };

    const contentStyle = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    return (
        <div className="group cursor-pointer relative block overflow-hidden" style={cardStyle}>
            <button
                className="absolute end-4 top-4 z-10 rounded-full p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span className="sr-only">Wishlist</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
            </button>

            <img
                src={image}
                alt=""
                className="h-64 py-4 bg-[#FFD7BE] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative border border-gray-100 bg-white p-6" style={contentStyle}>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
                <div className='flex items-center justify-between'>
                    <p className="mt-1.5 text-sm text-gray-700 font-semibold">N{price}</p>
                    <div className="flex items-center justify-between gap-3">
                        <button className='cursor-pointer opacity-50'><FiMinusCircle /></button>
                        <p>1</p>
                        <button className='cursor-pointer'><FiPlusCircle /></button>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <span className="sr-only">Colors available</span>
                    <button aria-label="Yellow" className="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>
                    <button aria-label="Red" className="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>
                    <button aria-label="Blue" className="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>
                    <button aria-label="Black" className="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
                </div>
                <div className='mt-10'>
                    <Link to='/cart' className='bg-[#EC5766] p-4 rounded-3xl text-white'>
                        Add to Cart
                    </Link>
                </div>
                    
                
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default ProductCard
