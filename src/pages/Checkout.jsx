import React from 'react';
import PropTypes from 'prop-types';

import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

// Header-Image
import CheckoutHero from '../assets/img/checkout.png';
import checkout1 from '../assets/img/checkout/checkout1.png';
import checkout2 from '../assets/img/checkout/checkout2.png';
import checkout3 from '../assets/img/checkout/checkout3.png';

// Icons
import { FiMinusCircle,FiPlusCircle  } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
;


// Data
const checkoutData = [
  {
    id: 1,
    image: checkout1,
    title: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
    price: '20,422.41',
    total: '20,422.41',
    color: '#EC5766',
    amount:'1'
  },
  {
    id: 2,
    image: checkout2,
    title: 'Pro Filtr Soft Matte Longwear Liquid Foundation',
    price: '32,865.32',
    total: '65,730.64',
    color: '#813405',
    amount:'2'
  },
  {
    id: 3,
    image: checkout3,
    title: 'Studio Fix Powder Plus Foundation',
    price: '37,992.91',
    total: '37,992.91',
    color: '#813405',
    amount:'1'
  },
]

const CheckoutItem = ({title, image, price, total, amount}) =>{
  const theme = useTheme();
  return(
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      {/* image & Title */}
      <Box className="flex justify-between gap-4" >
        <div className='bg-[#FFD7BE] p-6'>
            <img src={image} alt="" className='w-32 h-32' />
        </div>
        {/* Title & price */}
        <div className='flex-column pt-3 space-y-6 items-center'>
          <p className='font-medium'>{title}</p>
          <Stack direction='row' justifyContent='space-between'>
             <Box>
              <p>Price</p>
              <p className='font-semibold'>{price}</p>
            </Box>
            <Box>
            <p>Total</p>
              <p className='font-semibold'>{total}</p>
            </Box>
          </Stack>
        </div>

      </Box>
      {/* Amount & delete */}
     <Stack spacing={3} justifyContent='center' alignItems='center'>
        <Box className="flex items-center justify-between gap-3">
            <a className='cursor-pointer'><FiMinusCircle /></a>
            <p>{amount}</p>
            <a className='cursor-pointer'><FiPlusCircle /></a>
          </Box>
          <FaRegTrashAlt />
     </Stack>
      
    </Stack>
  )
}

CheckoutItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  total: PropTypes.string,
  amount: PropTypes.string,
  image: PropTypes.string
};

const Checkout = () => {
  const theme = useTheme()

  const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };

  const ButtonSX = {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50px',
    color: 'white',
    padding: '10px 20px',
  }


  

  return (
    <>
    <Container>
      {/* Heading */}
      <Typography textAlign='center' variant='h4' sx={{mt:10, mb:8}}>Delivery Information</Typography>
      {/*Form*/}
      <Grid container>
        <Grid item xs={12}>
          <form>
            <Stack direction='row' justifyContent='space-between'>
              <div className='flex flex-col'>
                <label htmlFor="name">Full Name</label>
                <input className='border border-slate-500' type="text" placeholder='Name' id='name' />
              </div>
              <div>
                <label htmlFor="tel">Full Name</label>
                <input className='border border-slate-500' type="text" placeholder='Name' id='tel' />
              </div>
            </Stack>
          </form>
            
        </Grid>
      </Grid>
      

      {/* checkout contents */}
      
        {/* Heading */}
        <Typography textAlign='center' variant='h4' sx={{mt:10, mb:8}}>Shopping Cart</Typography>
          <Grid container spacing={3}>
            {checkoutData.map((data, index)=>{
              return(
                <Grid key={index} item xs={12}>
                    <CheckoutItem
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
  );
}

export default Checkout;
