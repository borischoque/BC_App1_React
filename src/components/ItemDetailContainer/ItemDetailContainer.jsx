import React, { useEffect, useState } from 'react';
import functionPromiseFind from '../../functions/functionPromiseFind';
import ItemDetail from '../ItemDetail/ItemDetail';
import Grid from '@mui/material/Grid';
import { productos } from '../../functions/listProducts';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {id} = useParams();

  // DEFINO EL ESTADO DE PRODUCTOS
  const [productItem, SetproductItem] = useState({});

  const listaproductos = productos;
  
  useEffect(() => {
    functionPromiseFind(listaproductos,1000,id).then((res) => {
      SetproductItem(res)
    }).catch((err) => {
      console.log(err);
    })
  }, [id]);
  
  return (
    <Grid container spacing={1}>
        <Grid sx={{ mx:'auto'}} key={productItem.id} item xs={12} lg={4} md={6} sm={6}>
          <ItemDetail item={productItem}/>   
        </Grid>
    </Grid>
  )
}

export default ItemDetailContainer