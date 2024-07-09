import React from 'react';
import PropTypes from 'prop-types';

import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

// Header-Image
import CheckoutHero from '../assets/img/checkout.png';
import checkout1 from '../assets/img/checkout/checkout1.png';
import checkout2 from '../assets/img/checkout/checkout2.png';
import checkout3 from '../assets/img/checkout/checkout3.png';

import master from '../assets/img/payment/master.png'
import visacard from '../assets/img/payment/visa.png'
import paypal  from '../assets/img/payment/paypal.png'
import google from '../assets/img/payment/google.png'
import apple from '../assets/img/payment/apple.png'
import bank from '../assets/img/payment/bank.png'



// Icons
import { FiMinusCircle,FiPlusCircle  } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
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
    <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{borderBottom: '1px solid #333', pb:2}}>
      {/* image & Title */}
      <Box className="flex justify-between gap-4" >
        <div className='bg-[#FFD7BE] p-6'>
            <img src={image} alt="" className='md:w-32 md:h-32' />
        </div>
        {/* Title & price */}
        <div className='flex-column pt-3 space-y-6 items-center'>
          <p className='font-medium'>{title}</p>
          <Stack direction='row' spacing={3} justifyContent='space-between'>
             <Box>
              <p>Price</p>
              <p className=''>{price}</p>
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
      <Typography textAlign={{xs:'center', md:'left'}} variant='h4' sx={{mt:10, mb:8}}>Delivery Information</Typography>
      {/*Form*/}
      <Grid container>
        <Grid item xs={12} display={{xs:'flex', md:'block'}} justifyContent='center' alignItems='center'>
          <form >
            <Stack spacing={5}>
                <Stack direction={{xs:'column', md:'row'}} spacing={{xs:5, md:10}} justifyContent='space-between' >
                  <div className='flex flex-col space-y-2'>
                    <label htmlFor="name">Full Name</label>
                    <input className='border border-slate-500 rounded pl-2 p-2 w-[300px] md:w-[400px]' type="text" placeholder='Name' id='name' />
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <label htmlFor="name">Tel</label>
                    <input className='border border-slate-500 rounded pl-2 p-2 w-[300px] md:w-[400px]' type="text" placeholder='Name' id='name' />
                  </div>
                </Stack>
                <Stack direction={{xs:'column', md:'row'}} spacing={{xs:5, md:10}} justifyContent='space-between' >
                  <div className='flex flex-col space-y-2'>
                    <label htmlFor="address">Address</label>
                    <input className='border border-slate-500 rounded pl-2 p-2 w-[300px] md:w-[400px]' type="text" placeholder='e.g 22,Omotayo ojo str,Ikeja, Lagos, Nigeria' id='address' />
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <label htmlFor="zipcode">Tel</label>
                    <input className='border border-slate-500 rounded pl-2 p-2 w-[300px] md:w-[400px]' type="text" placeholder='e.g ikeja' id='zipcode' />
                  </div>
                </Stack>
                <Stack direction={{xs:'column', lg:'row'}} spacing={{xs:5, md:3}} justifyContent='space-between' >
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="country">Country</label>
                  <input className='border border-slate-500 rounded pl-2 p-2 w-[300px]' type="text" placeholder='Name' id='name' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="state">State/Province/Region</label>
                  <input className='border border-slate-500 rounded pl-2 p-2 w-[300px]' type="text" placeholder='e.g Lagos' id='state' />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="city">City</label>
                  <input className='border border-slate-500 rounded pl-2 p-2 w-[300px]' type="text" placeholder='e.g Ikeja' id='city' />
                </div>
              </Stack>
            </Stack>
             
          </form>
            
        </Grid>

        {/* Payment Option */}
        <Grid item xs={12} mt={10}>
          <Typography textAlign={{xs:'center', md:'left'}} variant='h4' mb={5}>Payment Method</Typography>
          <Stack spacing={5}>
            {/* Card Payment */}
            <div className='flex items-center space-x-5 md:space-x-20 w-full border-b border-b-slate-700 pb-5'>
              <input type="radio" id="card" name="card" value="card" className="mr-2 h-10 w-10" defaultChecked />
              <label htmlFor="card" className="block text-gray-700 text-md md:text-xl">Card Payment</label>    
              <Stack direction='row' pl={{xs:0, lg:12}} spacing={3}>
                <img src={master} alt="mastercard" className='h-12 w-15' />
                <img src={visacard} alt="visacard" className='h-12 w-15' />
              </Stack>
              </div>
            
              {/* Third Party Payment */}
              <div className='flex items-center space-x-0 md:space-x-20 w-full border-b border-b-slate-700 pb-5'>
              <input type="radio" id="card" name="card" value="card" className="mr-2 h-10 w-10" />
              <label htmlFor="card" className="block text-gray-700 text-md md:text-xl">Third Party Payment</label>    
              <Stack direction='row' spacing={{xs:0, md:3}}>
                <img src={paypal} alt="paypal" className='h-5 w-10 md:h-10 md:w-20' />
                <img src={apple} alt="apple" className='h-5 w-12 md:h-10 md:w-20' />
                <img src={google} alt="google" className='h-5 w-12 md:h-10 md:w-20' />
              </Stack>
              </div>

              {/* Bank Payment */}
              <div className='flex items-center space-x-5 md:space-x-20 w-full border-b border-b-slate-700 pb-5'>
                <input type="radio" id="card" name="card" value="card" className="mr-2 h-10 w-10"  />
                <label htmlFor="card" className="block text-gray-700 text-md md:text-xl">Bank Payment</label>    
                <img src={bank} alt="Bank" className='pl-1 lg:pl-20' />
              </div>
          </Stack>
        </Grid>
      </Grid>
      

      {/* checkout contents */}
      
        {/* Heading */}
        <Typography textAlign={{xs:'center', md:'left'}} variant='h4' sx={{mt:10, mb:8}}>Order Summary</Typography>
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
             <Grid item xs={12} marginY={10} >
                <Stack spacing={5} justifyContent='space-between'>
                  <div className='flex flex-col-reverse items-center gap-3 md:flex-row md:justify-between w-full border-b border-slate-700 pb-5'>
                    <div className='flex items-center gap-2'>
                      <p className='font-semibold text-2xl'>Grand Total</p>
                      <span className='text-base'>(4 items)</span>
                    </div>
                    
                    <p className='md:font-semibold text-2xl'>N124,075.96</p>
                  </div>
                  <Link to='/confirm' className='bg-[#EC5766] self-center w-[50%] text-center p-4 rounded-3xl text-white'>
                    Confirm Order
                </Link>
                </Stack>
             </Grid>
          </Grid>
      </Container>

    </>
  );
}

export default Checkout;
