import React, { useContext } from 'react';
// mui imports
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';

// Components
import ProductCard from '../components/ProductCard';

// Context
import { ProductContext } from '../contexts/ProductContext';

// Header-Image
import angle from '../assets/img/angle.png';
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



const Product = () => {
  const { products, loading } = useContext(ProductContext);

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
    fontSize: {xs:'2.5rem', md:'3.5rem'},
    textAlign:{xs:'center', md:'left'},
    fontWeight: '500',
    maxWidth: '700px',
    color: '#151515'
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
          <Typography variant="caption1" sx={{maxWidth: '400px', fontSize:'20px', lineHeight: '30px', textAlign:{xs:'center', lg:'left'}}} >
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
          {loading ? (
              <Typography textAlign="center" variant="h5" mt={5}>Loading</Typography>
          ):(
            <Grid container spacing={4}>
                {products.map((product, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3}>
                    <ProductCard title={product.name} image={product.photos[0]?.url} price={product.price} />
                  </Grid>
                ))}
            </Grid>
          )}
      </Container>
    </>
  );
};

export default Product;
