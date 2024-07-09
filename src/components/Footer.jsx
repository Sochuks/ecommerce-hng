import React from 'react';
import { Box, Grid, Typography, TextField, Button, Container, Stack } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Instagram, LinkedIn, WhatsApp, Facebook } from '@mui/icons-material';

// Lipstick
import Lipstick from '../assets/img/icons8-lipstick-96.png'

const Footer = () => {
  const theme = useTheme();

  const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#5C3A3B',
    color: '#FFF',
    padding: '50px 20px',
  }));

  const NewsletterBox = styled(Box)(({ theme }) => ({
    border: '1px solid #FFF',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
  }));

  const SocialIconsBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  }));
  return (
    <FooterContainer>
      <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} mt={{xs:2, md:5}}>
          {/* Logo */}
          <Stack spacing={3}>
              <Stack direction='row' alignItems='center'>
                  <img src={Lipstick} alt="logo" className='rotate-45 h-10 w-10' />
                  <span className='logo'>Glamazone</span>
                </Stack>
                <Typography variant='caption1'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque, unde cupiditate illo doloribus quibusdam at ad consectetur distinctio? Incidunt?
                </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} mt={{xs:2, md:8}}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography>Cart</Typography>
          <Typography>Our Products</Typography>
        </Grid>
        <Grid item xs={12} md={3} mt={{xs:2, md:8}}>
          <Typography variant="h6">Contact</Typography>
          <Typography>Phone</Typography>
          <Typography>Email</Typography>
          <Typography>Address</Typography>
        </Grid>
        <Grid item xs={12} md={3} mt={{xs:2, md:8}}>
          <Typography variant="h6">Socials</Typography>
          <Typography>Instagram</Typography>
          <Typography>LinkedIn</Typography>
          <Typography>WhatsApp</Typography>
          <Typography>X</Typography>
        </Grid>
        <Grid item xs={12}>
          <NewsletterBox>
            <Typography variant="h6" textAlign="center">Subscribe to our Newsletter</Typography>
            <form>
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                size="small"
                sx={{ marginBottom: '10px', backgroundColor: '#FFF', borderRadius: '5px' }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#FF6F61',
                  color: '#FFF',
                  display: 'block',
                  margin: 'auto',
                }}
              >
                Submit
              </Button>
            </form>
          </NewsletterBox>
        </Grid>
        <Grid item xs={12}>
          <SocialIconsBox>
            <Instagram />
            <LinkedIn />
            <WhatsApp />
            <Facebook />
          </SocialIconsBox>
        </Grid>
        <Grid item xs={12}>
          <Typography textAlign="center" sx={{ marginTop: '20px' }}>© 2024 Glamazone Inc.</Typography>
        </Grid>
      </Grid> 
      </Container>
    </FooterContainer>
  )
}

export default Footer