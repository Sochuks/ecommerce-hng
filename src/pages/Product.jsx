import React from 'react';
// mui imports
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

// Components
import ProductCard from '../components/ProductCard';

// Header-Image
import Hero from '../assets/img/Rectangle 2.png';
import HeroII from '../assets/img/shop-hero.png';

// Product Images
import lips1 from '../assets/img/lip/lip-1.png';
import lips2 from '../assets/img/lip/lip-2.png';
import lips3 from '../assets/img/lip/lip-3.png';
import lips4 from '../assets/img/lip/lip-4.png';

import found1 from '../assets/img/foundation/foundation1.png';
import found2 from '../assets/img/foundation/foundation2.png';
import found3 from '../assets/img/foundation/foundation3.png';
import found4 from '../assets/img/foundation/foundation4.png';

import powder1 from '../assets/img/powder/powder1.png';
import powder2 from '../assets/img/powder/powder2.png';
import powder3 from '../assets/img/powder/powder3.png';
import powder4 from '../assets/img/powder/powder4.png';

import eye1 from '../assets/img/eye/eye1.png';
import eye2 from '../assets/img/eye/eye2.png';
import eye3 from '../assets/img/eye/eye3.png';
import eye4 from '../assets/img/eye/eye4.png';


// Product List
export const Products = [
  {
    category: 'lips',
    items: [
      {
        id: 1,
        image: lips1,
        name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '20,422.41',
        content: 'stew',
      },
      {
        id: 2,
        image: lips2,
        name: 'Dior Addict Lip Glow Oil, 015 Cherry',
        price: '32,865.32',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 3,
        image: lips3,
        name: 'Channel Rouge Allure Velvet Luminous Matte Lip Colour 57 3.5g',
        price: '105,499.41',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 4,
        image: lips4,
        name: 'Essence Tinted Kiss Hydrating Lip Tint 0 Mauvelous 4m1',
        price: '7,422.41',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
    ],
  },
  {
    category: 'foundation',
    items: [
      {
        id: 1,
        image: found1,
        name: 'Pro Filt.r Soft Matte Longwear Liquid Foundation',
        price: '37,865.32',
        content: 'stew',
      },
      {
        id: 2,
        image: found2,
        name: 'Studio Fix Fluid SPF Foundation',
        price: '39,999.99',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 3,
        image: found3,
        name: 'Clinique Stay-Matte Oil-Free Makeup Foundation CN74 Beige 30m1',
        price: '69,895.65',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 4,
        image: found4,
        name: 'IT Cosmetics CC. Oil Matte Foundation S Light Medium 32m1',
        price: '77,063.44',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
    ],
  },
  {
    category: 'powder',
    items: [
      {
        id: 1,
        image: powder1,
        name: 'Studio Fix Powder Plus Foundation',
        price: '37,992.91',
        content: 'stew',
      },
      {
        id: 2,
        image: powder2,
        name: 'Hourglass Vanish Airbrush  Pressed Powder-Translucent Deep 9.0g',
        price: '52,545.32',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 3,
        image: powder3,
        name: 'IT Cosmetics Bye Bye Pores Press Powder',
        price: '83,430.50',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 4,
        image: powder4,
        name: 'Clinique Almost Powder Foundation SPF15 05 Medium lOg',
        price: '68,307.11',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
    ],
  },
  {
    category: 'eyeshadow',
    items: [
      {
        id: 1,
        image: eye1,
        name: 'Clarins Ombre 4 Couleurs Eyeshadow Palette 08 Amber Gradation 42g',
        price: '89,048.50',
        content: 'stew',
      },
      {
        id: 2,
        image: eye2,
        name: 'Bellapierre Cosmetics Eyeshadow Palette 35 Colors Emerald City',
        price: '69,498.51',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 3,
        image: eye3,
        name: 'M.A.0 Cosmetics Powder Kiss Soft Matte Eye Shadow My Tweedy 1.5g ',
        price: '52,545.32',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
      {
        id: 4,
        image: eye4,
        name: 'Sisley Paris Phyto-Eye Twist Waterproof Long Lasting Eyeshadow 18 Fawn 1.5g ',
        price: '22,845.92',
        content: 'Amazing product quality and great customer service. Highly recommend!',
      },
    ],
  },
];

const Product = () => {
  const Header = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '90vh',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${HeroII})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  }));

  const Overlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '84vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }));

  const ContentBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%', 
    zIndex: 1,
    color: theme.palette.secondary.dark,
    padding: theme.spacing(4),
  }));

  const HeaderSX ={
    fontSize: '3.5rem',
    fontWeight: '500',
    maxWidth: '700px'
  }

  const logo={
    color: '#EC5766'
  }

  return (
    <>
      <Header>
        
        <ContentBox>
          {/* <Overlay  /> */}
          {/* <Grid container spacing={2}>
            <Grid item xs={6}>
              
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">Home</Typography>
            </Grid>
          </Grid> */}
          <Stack spacing={2} sx={{marginLeft:{xs:0, lg:5}}} >
          <Typography variant="h2" sx={HeaderSX}>Start <br />Your Beauty Journey<br /> with <span className='text-[#EC5766]'>Glamazone</span> </Typography>
          <Typography variant="caption1" sx={{maxWidth: '400px', fontSize:'20px', lineHeight: '30px'}} >
            Explore our collections, indulge in some self-care, and embrace your inner glam! We can't wait to be a part of your beauty story. 
          </Typography>
          {/* Search Bar */}
          <div className="w-full max-w-lg pt-5" >
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
                  <input type="search" name="search" placeholder="Search Products" className="p-4 pl-14 text-lg text-gray-600 rounded-3xl w-full border border-gray-600" />
                </form>
              </div>
            </div>
            </Stack>
        </ContentBox>
      </Header>
      {/* Product Listing */}
      <Container sx={{marginBottom: 15}}>
          {/* Title */}
          <Typography textAlign="center" variant="h3" mt={5}>Products</Typography>
            {Products.map((category) => (
              <Grid container spacing={4} key={category.category} >
                {/* Category Items */}
                <Grid item xs={12}>
                  <Typography paddingY={3} variant="h4"  mt={3}>
                    {category.category.charAt(0).toUpperCase() + category.category.slice(1)}
                  </Typography>
                  <Grid container spacing={4}>
                    {category.items.map((data, index) => (
                      <Grid key={index} item xs={12} md={6} lg={3}>
                        <ProductCard title={data.name} image={data.image} price={data.price} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            ))}
      </Container>
    </>
  );
};

export default Product;
