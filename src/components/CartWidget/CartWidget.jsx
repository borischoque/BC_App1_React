import React, {useContext} from 'react';
import { CartContext } from '../CartContext/CartContext';
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';

const CartWidget = () => {

  // Declaramos que contexto vamos a usar
  const {cart} = useContext(CartContext)
  return (
    <>
      <Link to={`/cart`}>
        <IconButton size="large">
            <ShoppingCartIcon fontSize="large" />
            <Typography variant="h5">
                {`(${cart.length})`}
            </Typography>
        </IconButton>
      </Link>
    </>
  )
}

export default CartWidget