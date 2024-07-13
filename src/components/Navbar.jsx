import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Badge, Box, Stack, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

// Lipstick
import Lipstick from '../assets/img/icons8-lipstick-96.png';

// Icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { SideBarContext } from '../contexts/SideBarContext';

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);

  const theme = useTheme();

  const StoreAppBar = styled(AppBar)({
    position: 'relative',
    backgroundColor: theme.palette.primary.light,
    padding: '10px 20px',
    boxShadow: 'none',
    zIndex: 10
  });

  const Menu = styled(Box)(({ theme }) => ({
    fontSize: '15px',
    color: theme.palette.store_black.main,
    fontWeight: 500,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }));

  const Logo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '30px',
  }));

  return (
    <>
      <StoreAppBar>
        <Toolbar sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Stack direction='row' alignItems='center'>
            <img src={Lipstick} alt="logo" className='rotate-45 h-10 w-10' />
            <span className='logo'>Glamazone</span>
          </Stack>

          {/* Menu */}
          <Menu>
            <Stack direction='row' spacing={2}>
              <Link className='nav-link' to="/">Product</Link>
              <Link className='nav-link' to="/cart">Cart</Link>
              <Link className='nav-link' to="/checkout">Checkout</Link>
            </Stack>
          </Menu>

          {/* Buttons */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </button>
        </Toolbar>
      </StoreAppBar>
    </>
  );
};

export default Navbar;
