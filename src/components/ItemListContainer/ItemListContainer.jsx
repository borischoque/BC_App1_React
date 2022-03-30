import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ItemListContainer = () => {
  return (
    <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Container sx={{ my: 2, borderRadius:10, borderStyle:'solid',}}>
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
                <Typography>
                    El contenido de este componente "ItemListContainer" es solo provisorio.
                    Este componente será el contenedor del catalogo para mostrar los diferentes productos.
                </Typography>
            </Container>
          </Grid>
      </Grid>
  )
}

export default ItemListContainer