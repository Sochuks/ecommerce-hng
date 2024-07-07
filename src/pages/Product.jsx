import React from 'react'
// mui imports
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// Header-Image
import Hero from '../assets/img/Rectangle 2.png'

const Product = () => {

    
  const Header = styled(Box)(({theme}) =>({
    position: 'relative',
    width: '100%',
    height: '100vh',
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
    </>
  )
}

export default Product