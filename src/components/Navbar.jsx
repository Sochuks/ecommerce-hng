import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, Button, Divider, Stack, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const theme = useTheme();

  const StoreAppBar = styled(AppBar)({
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    padding: '10px 20px'
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

  const ButtonSX = {
    borderColor: theme.palette.primary.main,
    border: '1px solid',
    borderRadius: '50px'
  }
  
  return (
    <>
      <StoreAppBar>
          <Toolbar sx={{alignItems:'center', justifyContent:'space-between'}}  >
              {/* Logo */}
              <Stack>
                <span color={theme.palette.primary.main}>Glamour</span>
              </Stack>
              {/* Menu & Buttons */}
              <Stack direction='row' spacing={4} alignItems="center">
                  {/* Menu */}
                  <Menu>
                    <Stack direction='row'
                           divider={<Divider orientation="vertical" flexItem />}
                           spacing={2}>
                        <Link to="/">Product</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to="/checkout">Checkout</Link>
                    </Stack>
                  </Menu>
                  {/* Buttons */}
                  <Stack direction='row' spacing={2}>
                    <Button sx={ButtonSX} >Shop Now</Button>
                    <Button sx={ButtonSX} >Login</Button>
                  </Stack>
              </Stack>
          </Toolbar>
      </StoreAppBar>
    </>
  )
}

export default Navbar