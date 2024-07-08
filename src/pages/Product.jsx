import React from 'react'
// mui imports
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';

// Components
import ProductCard from '../components/ProductCard';

// Header-Image
import Hero from '../assets/img/Rectangle 2.png'
// Product Images
import lips1 from '../assets/img/lip/lip-1.png';
import lips2 from '../assets/img/lip/lip-2.png';
import lips3 from '../assets/img/lip/lip-3.png';
import lips4 from '../assets/img/lip/lip-4.png';


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
        content:'stew',
      },
      {
        id: 2,
        image: lips2,
        name: 'Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '32,865.32',
        content:
          'Amazing product quality and great customer service. Highly recommend!',
      },
      {
          id: 3,
          image: lips3,
          name: 'Lacquer 03 Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
        {
          id: 4,
          image: lips4,
          name: 'Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
    ],
    category: 'foundation',
    items: [
      {
        id: 1,
        image: lips1,
        name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '20,422.41',
        content:'stew',
      },
      {
        id: 2,
        image: lips2,
        name: 'Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '32,865.32',
        content:
          'Amazing product quality and great customer service. Highly recommend!',
      },
      {
          id: 3,
          image: lips3,
          name: 'Lacquer 03 Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
        {
          id: 4,
          image: lips4,
          name: 'Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
    ],
    category: 'powder',
    items: [
      {
        id: 1,
        image: lips1,
        name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '20,422.41',
        content:'stew',
      },
      {
        id: 2,
        image: lips2,
        name: 'Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '32,865.32',
        content:
          'Amazing product quality and great customer service. Highly recommend!',
      },
      {
          id: 3,
          image: lips3,
          name: 'Lacquer 03 Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
        {
          id: 4,
          image: lips4,
          name: 'Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
    ],
    category: 'eyeshadow',
    items: [
      {
        id: 1,
        image: lips1,
        name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '20,422.41',
        content:'stew',
      },
      {
        id: 2,
        image: lips2,
        name: 'Dewy Lip Lacquer 03 Lively 6.5ml',
        price: '32,865.32',
        content:
          'Amazing product quality and great customer service. Highly recommend!',
      },
      {
          id: 3,
          image: lips3,
          name: 'Lacquer 03 Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
        {
          id: 4,
          image: lips4,
          name: 'Lively 6.5ml',
          price: '105,499.41',
          content:
            'Amazing product quality and great customer service. Highly recommend!',
        },
    ],
  },
];

const Product = () => {

    
  const Header = styled(Box)(({theme}) =>({
    position: 'relative',
    width: '100%',
    height: '80vh',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'cover',
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
    zIndex: 1,
    color: '#fff',
    padding: theme.spacing(4),
  }));

  

  return (
    <>
      <Header>
      <Overlay />
      <ContentBox>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h3">Welcome</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3">Home</Typography>
          </Grid>
        </Grid>
      </ContentBox>
    </Header>
    {/* Product Listing */}
    <Container>
        {Products.map((category)=>{
            return(
                <Grid key={category.category} container spacing={4}>
                    {/* Title */}
                    <Grid item xs={12}>
                        <Typography variant='h3'>
                            Products
                        </Typography>
                    </Grid>
                    {/* lips */}
                    <Grid item xs={12} >
                        <Typography paddingY={3} variant='h4'>
                                Lips
                        </Typography>
                        <Grid container spacing={4}>
                            {category.items.map((data, index) =>{
                                return(
                                    <Grid key={index} item xs={12} md={6} lg={3}>
                                        <ProductCard 
                                            title={data.name}
                                            image={data.image}
                                            price={data.price}
                                            />
                                    </Grid>
                                )
                            })};
                        </Grid>
                    </Grid>
                </Grid>
            )
        })}
        
    </Container>
    </>
  )
}

export default Product