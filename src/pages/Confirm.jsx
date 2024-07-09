import React from 'react'
import Navbar from '../components/Navbar'
import { useTheme } from '@mui/material/styles';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Confirm = () => {
const theme = useTheme()

    const ButtonSX = {
        borderColor: theme.palette.primary.main,
        border: '1px solid',
        borderRadius: '50px',
        display: 'none'
      }
  return (
    <>
    <Navbar/>
    <Container>
        
        <Stack spacing={2}  sx={{textAlign:'center', height:'100vh', alignItems:'center', justifyContent:'center'}}>
            <Typography variant='h2'>Order Successful</Typography>
            <Typography variant='h4'>Thank you for Shopping at <span className='logo'>Glamazone</span></Typography>
            <Typography variant='h4'>Your order is on its way, and you'll be glowing in no time </Typography>
            <Link to='/' className='bg-[#EC5766] self-center w-[25%] text-center p-4 rounded-3xl text-white'>
                    Back to Product Page
                </Link>
        </Stack>
        
        But
    </Container>
    </>
  )
}

export default Confirm