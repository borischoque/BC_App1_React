import React,{useContext} from 'react'
import { CartContext } from '../CartContext/CartContext';
import Typography from '@mui/material/Typography';
import { Button, List, ListItem } from '@mui/material';

const Cart = () => {
    // Declaramos que contexto vamos a usar
    const {cart,RemoveAll,RemoveFromCart} = useContext(CartContext)
  return (
    <>
    <Button onClick={ () => RemoveAll()} size="small" variant="contained">
      <Typography variant="h6">
          BORRAR TODOS LOS PRODUCTOS
      </Typography>
    </Button>
    {cart.map(item =>
      <List>
        <ListItem key={item.id}>
          <Typography>
          ID --- {item.id}
          </Typography>
        </ListItem>
        <ListItem  key={item.description}>
          <Typography>
          DESCRIPCION --- {item.description}
          </Typography>
        </ListItem>
        <ListItem key={item.category}>
          <Typography>
          CATEGORIA --- {(item.category.toUpperCase())}
          </Typography>
        </ListItem>
        <ListItem key={item.initialValue}>
          <Typography>
          {`CANTIDAD DE COMPRA --- ${item.initialValue} Uni`}
          </Typography>
        </ListItem>
        <Button onClick={ () => RemoveFromCart(item.id)} size="small">
            <Typography variant="h6">
                BORRAR PRODUCTO
            </Typography>
        </Button>
      </List>
    )}
    </>

  )
}

export default Cart