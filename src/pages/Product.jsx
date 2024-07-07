import React from 'react'
// mui imports
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Grid, Typography } from '@mui/material';

// Components
import ProductCard from '../components/ProductCard';
import { Products } from '../components/ProductsData'

// Header-Image
import Hero from '../assets/img/Rectangle 2.png'
import lip from '../assets/img/lip/lip-1.png'
const Product = () => {

    
  const Header = styled(Box)(({theme}) =>({
    position: 'relative',
    width: '100%',
    height: '80vh',
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${Hero})`,
    backgroundSize: 'contain',
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
                                    <Grid key={index} item xs={3}>
                                        <ProductCard 
                                            title={data.name}
                                            image={lip}
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