import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {

  const {id} = useParams();

  // DEFINO EL ESTADO DE PRODUCTOS
  const [productItem, SetproductItem] = useState({});

  useEffect(() => {
    const db = getFirestore();

    const selecction = doc(db, 'listaproductosBC', id);

    getDoc(selecction).then( (res) => {
        const union = {id: res.id, ...res.data()};
        SetproductItem(union);
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