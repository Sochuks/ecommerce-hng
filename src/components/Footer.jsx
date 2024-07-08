import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Instagram, LinkedIn, WhatsApp, Facebook } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#5C3A3B',
    color: '#FFF',
    padding: '40px 20px',
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
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6">Glamazone</Typography>
          <Typography>Africa</Typography>
          <Typography>United States</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6">Quick Links</Typography>
          <Typography>Cart</Typography>
          <Typography>Our Products</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6">Contact</Typography>
          <Typography>Phone</Typography>
          <Typography>Email</Typography>
          <Typography>Address</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
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
    </FooterContainer>
  )
}

export default Footer