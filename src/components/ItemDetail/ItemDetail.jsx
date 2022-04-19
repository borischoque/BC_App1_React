import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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

const ItemDetail = ({item}) => {

// Estado que controla que aparezca ó desaparezca el componente ItemCount
const [appear,Setappear] = useState(true)
// Estado que guarda la cantidad de compra por producto
const [cantidad, Setcantidad] = useState(0)

// función que se pasa al componente Count
const add = (cantCompra) => {
  Setcantidad(cantCompra)
  Setappear(false)
}

console.log(cantidad);

  return (
    <Card sx={{ maxWidth: 350, backgroundColor:'#ebe1d9', mx:'auto'}}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
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
        <CardMedia style={{height: 250, width: 250}} image={item.src}/>
        <CardContent>
            <Typography variant="h5">
            {item.description}
            </Typography>
        </CardContent>
        {
          (appear) ? (<ItemCount stk={item.stock} initial={0} cant={add}/>) : 
          (<Button 
          size="small" 
          variant="contained"
          component={RouterLink}
          to={`/cart`}
          >
            <Typography variant="h6">
                Ir al carrito
            </Typography>
          </Button>)
        }
    </Card>
  )
}

export default ItemDetail