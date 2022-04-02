import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({message}) => {

  const onAdd = (value) => {
    console.log(`Se envia al carrito el valor ${value} Unidades para realizar la compra.`);
  }

  return (
    <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Container sx={{ my: 2, borderRadius:10, borderStyle:'solid',}}>
                <Typography>
                  {message}
                </Typography>
                <ItemCount stock={4} initial={0} onAdd={onAdd} />
                <br />
                <ItemCount stock={10} initial={0} onAdd={onAdd} />
            </Container>
          </Grid>
      </Grid>
  )
}

export default ItemListContainer