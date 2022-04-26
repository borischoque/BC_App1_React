import React,{useContext, useEffect, useState} from 'react'
import { CartContext } from '../CartContext/CartContext';
import Typography from '@mui/material/Typography';
import { Button, List, ListItem } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  // Declaramos que contexto vamos a usar
  const {cart,RemoveAll,RemoveFromCart,totalPrice,buyAll} = useContext(CartContext)
  
  const [totalPrecio, SetTotalPrecio] = useState(0)

  useEffect(() => {
    SetTotalPrecio(totalPrice(cart))
  },[cart.length])

  if (cart.length === 0) return (
    <>
    <Typography variant="h5">
        NO HAY PRODUCTOS EN EL CARRITO
    </Typography>
    <Button 
            size="small" 
            variant="outlined"
            component={RouterLink}
            to={`/`}
            >
              <Typography variant="h6">
                  VER LISTA DE PRODUCTOS
              </Typography>
            </Button>
    </>
  )

  return (
    <>
    <Button onClick={ () => RemoveAll()} size="small" variant="contained">
      <Typography variant="h6">
          BORRAR TODOS LOS PRODUCTOS
      </Typography>
    </Button>
    <Typography variant="h5">
    {`TOTAL A PAGAR --- $${totalPrecio}`}
    </Typography>
    {cart.map(item =>
      <List>
        <ListItem>
          <Typography>
          ID --- {item.id}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
          DESCRIPCION --- {item.description}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
          CATEGORIA --- {(item.category.toUpperCase())}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
          {`CANTIDAD DE COMPRA --- ${item.initialValue} Uni`}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
          {`TOTAL PARCIAL --- $${item.initialValue*item.price}`}
          </Typography>
        </ListItem>
        <Button onClick={ () => RemoveFromCart(item.id)} size="small">
            <DeleteIcon fontSize="large" />
            <Typography variant="h6">
                BORRAR PRODUCTO
            </Typography>
        </Button>
      </List>
    )}
    <Button onClick={ () => buyAll()} size="small" variant="contained">
      <Typography variant="h6">
          FINALIZAR COMPRA
      </Typography>
    </Button>
    </>

  )
}

export default Cart