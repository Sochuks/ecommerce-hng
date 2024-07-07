import React from 'react'
import PropTypes from 'prop-types';

import lip1 from '../assets/img/lip/lip-1.png'
import { Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'



const ProductCard = ({title, price, image}) => {
    const theme = useTheme();

    const ButtonSX = {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50px',
        color: 'white',
        padding: '10px 20px'
      }

  return (
    <>
        <a href="#" class="group relative block overflow-hidden">
            <button
                class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
            >
                <span class="sr-only">Wishlist</span>

                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
                </svg>
            </button>

            <img
                src={image}
                alt=""
                class="h-64 py-4 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div class="relative border border-gray-100 bg-white p-6">

                <h3 class="mt-4 text-lg font-medium text-gray-900">{title}</h3>

                <div className='flex items-center justify-between'>
                    <p class="mt-1.5 text-sm text-gray-700">N{price}</p>
                    <p className='text-slate-600'>Quantity</p>
                </div>
                <div class="flex gap-4 mt-4">
                    <span class="sr-only">Colors available</span>

                    <button aria-label="Yellow" class="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>
                    <button aria-label="Red" class="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>
                    <button aria-label="Blue" class="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>
                    <button aria-label="Black" class="p-2 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
                </div>

                <form class="mt-4">
                <Button sx={ButtonSX}>
                    Add to Cart
                </Button>
                </form>
            </div>
            </a>
    </>
  )
}

ProductCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string
};

export default ProductCard