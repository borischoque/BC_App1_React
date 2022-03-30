import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';

const CartWidget = () => {
  return (
    <>
        <IconButton size="large">
            <ShoppingCartIcon fontSize="large" />
            <Typography variant="h5">
                (1)
            </Typography>
        </IconButton>
    </>
  )
}

export default CartWidget