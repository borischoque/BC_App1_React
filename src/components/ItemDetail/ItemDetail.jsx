import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { deepPurple } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import CardMedia from '@mui/material/CardMedia';
import ItemCount from '../ItemCount/ItemCount';
import {Link as RouterLink} from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({item}) => {

// Declaramos que contexto vamos a usar
const {AddToCart,cart} = useContext(CartContext)

// console.log(cantidad);

  return (
    <Card sx={{ maxWidth: 350, backgroundColor:'#ebe1d9', mx:'auto'}}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{item.letter}</Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <ShareIcon />
                </IconButton>
            }
            sx={{textTransform: 'uppercase'}}
            titleTypographyProps={{variant:'h4' }}
            title={item.category}

        />
        <CardMedia style={{height: 200, width: 200}} image={item.src}/>
        <CardContent>
            <Typography variant="h5">
            {item.description}
            </Typography>
        </CardContent>
        <ItemCount product={item} 
        stk={(item.stock)} 
        initial={0} 
        cant={AddToCart}/>
        {(cart.length !== 0) ? (<Button 
            size="small" 
            variant="outlined"
            component={RouterLink}
            to={`/cart`}
            >
              <Typography variant="h6">
                  Ir al carrito
              </Typography>
            </Button>) : null
        }
    </Card>
  )
}

export default ItemDetail