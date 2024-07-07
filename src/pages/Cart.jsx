import React from 'react'

import PropTypes from 'prop-types';

import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

// Header-Image
import CartHero from '../assets/img/checkout.png';
import cart1 from '../assets/img/checkout/checkout1.png';
import cart2 from '../assets/img/checkout/checkout2.png';
import cart3 from '../assets/img/checkout/checkout3.png';

// Icons
import { FiMinusCircle,FiPlusCircle  } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
;


// Data
const cartData = [
  {
    id: 1,
    image: cart1,
    title: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
    price: '20,422.41',
    total: '20,422.41',
    color: '#EC5766',
    amount:'1'
  },
  {
    id: 2,
    image: cart2,
    title: 'Pro Filtr Soft Matte Longwear Liquid Foundation',
    price: '32,865.32',
    total: '65,730.64',
    color: '#813405',
    amount:'2'
  },
  {
    id: 3,
    image: cart3,
    title: 'Studio Fix Powder Plus Foundation',
    price: '37,992.91',
    total: '37,992.91',
    color: '#813405',
    amount:'1'
  },
]

const CartItem = ({title, image, price, total, color, amount}) =>{
  const theme = useTheme();
  return(
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      {/* image & Title */}
      <Box className="flex justify-between gap-4" >
        <div className='bg-[#FFD7BE] p-6'>
            <img src={image} alt="" className='w-32 h-32' />
        </div>
        <div className='flex-column pt-3 space-y-2'>
          <p className='max-w-52 font-medium text-md'>{title}</p>
          <p>Color <span className={`rounded-full bg-[${color}] px-3 py-1`}></span> </p>
          <FaRegTrashAlt />
        </div>
      </Box>
      <Box>
        <p>Price</p>
        <p className='font-semibold'>{price}</p>
      </Box>
      <Box className="flex items-center justify-between gap-3">
        <a className='cursor-pointer'><FiMinusCircle /></a>
        <p>{amount}</p>
        <a className='cursor-pointer'><FiPlusCircle /></a>
      </Box>
      <Box>
      <p>Total</p>
        <p className='font-semibold'>{total}</p>
      </Box>
    </Stack>
  )
}

CartItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  total: PropTypes.string,
  color: PropTypes.string,
  amount: PropTypes.string,
  image: PropTypes.string
};

const Cart = () => {
  const theme = useTheme()

  const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };

  const ButtonSX = {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50px',
    color: 'white',
    padding: '10px 20px',
  }


  const Header = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '70vh',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${CartHero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  }));
  return (
    <>
        {/*Header*/}
      <Header>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'30px' }}>
            <Typography textAlign='left' variant='h1' sx={headerSX}>Make Purchase Now</Typography>
            {/* Search Bar */}
            <div className="w-full max-w-lg" >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-8 h-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                    </path>
                  </svg>
                </div>

                <form action="#" method="GET">
                  <input type="search" name="search" placeholder="Search Cart" className="p-4 pl-14 text-lg text-gray-600 rounded-3xl w-full border border-gray-600" />
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Header>

      {/* checkout contents */}
      <Container>
        {/* Heading */}
        <Typography textAlign='center' variant='h4' sx={{mt:10, mb:8}}>Shopping Cart</Typography>
          <Grid container spacing={3}>
            {cartData.map((data, index)=>{
              return(
                <Grid key={index} item xs={12}>
                    <CartItem
                      title={data.title}
                      image={data.image}
                      price={data.price}
                      total={data.total}
                      amount={data.amount} 
                      color={data.color}/>
                </Grid>
              )
            })}
             <Grid item xs={12} display='flex' justifyContent='flex-end'>
                <Stack  spacing={2}>
                  <div className='flex justify-between gap-14'>
                    <p>Subtotal</p>
                    <p className='font-semibold'>N124,075.96</p>
                  </div>
                  <Button sx={ButtonSX}>
                    Checkout
                </Button>
                </Stack>
             </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default Cart