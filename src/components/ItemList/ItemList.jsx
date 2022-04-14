import React from 'react';
import Item from '../Item/Item';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ItemList = ({listproductos}) => {
  return (
    <Grid container spacing={4}>
      {listproductos.map(prod =>
        <Grid sx={{ mx:'auto'}} key={prod.id} item xs={12} lg={4} md={6} sm={6}>
                <Item
                title={prod.category}
                letra={prod.letter}
                imageSrc={prod.src}
                id={prod.id}
                />
        </Grid>
      )}
    </Grid>
  )
}

export default ItemList