import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Button, Divider, Stack, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom';

// Lipstick
import Lipstick from '../assets/img/icons8-lipstick-96.png'


const Navbar = () => {
  const theme = useTheme();

  const StoreAppBar = styled(AppBar)({
    position: 'relative',
    backgroundColor: theme.palette.primary.light,
    padding: '10px 20px',
    boxShadow: 'none'
  })
  
  const Menu = styled(Box)(({theme}) =>({
    fontSize: '15px',
    color: theme.palette.store_black.main,
    fontWeight: 500,
    textAlign: 'center',
    display: 'flex',
    alignItems:'center',
    [theme.breakpoints.down('md')]:{
      display: 'none'
    }
  }));

  const Logo = styled(Box)(({theme}) =>({
    display: 'flex',
    alignItems: 'center',
    fontSize: '30px',
  }));

  const ButtonSX = {
    borderColor: theme.palette.primary.main,
    border: '1px solid',
    borderRadius: '50px',
    display: 'none'
  }
  
  return (
    <>
      <StoreAppBar>
          <Toolbar sx={{alignItems:'center', justifyContent:'space-between'}}  >
              {/* Logo */}
              <Stack direction='row' alignItems='center'>
                <img src={Lipstick} alt="logo" className='rotate-45 h-10 w-10' />
                <span className='logo'>Glamazone</span>
              </Stack>

                  {/* Menu */}
                  <Menu>
                    <Stack direction='row'
                           spacing={2}>
                        <Link className='nav-link' to="/">Product</Link>
                        <Link className='nav-link' to="/cart">Cart</Link>
                        <Link className='nav-link' to="/checkout">Checkout</Link>
                    </Stack>
                  </Menu>
                  
                  {/* Buttons */}
                  <Stack direction='row' spacing={2}>
                    <Button sx={ButtonSX} >Shop Now</Button>
                  </Stack>
              
          </Toolbar>
      </StoreAppBar>
    </>
  )
}

export default Navbar