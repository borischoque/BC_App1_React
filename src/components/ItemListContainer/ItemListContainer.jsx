import React, { useEffect, useState } from 'react';
import functionPromiseFilter from '../../functions/functionPromise';
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";
import { productos } from '../../functions/listProducts';

const ItemListContainer = () => {

  const {categoryid} = useParams();

  // const onAdd = (value) => {
  //   console.log(`Se envia al carrito el valor ${value} Unidades para realizar la compra.`);
  // }
  // DEFINO EL ESTADO DE PRODUCTOS
  const [products, Setproducts] = useState([]);
  
  const listaproductos = productos;

  useEffect(() => {

    functionPromiseFilter(listaproductos,1000,categoryid).then((res) => {
      Setproducts(res)
    }).catch((err) => {
      console.log(err);
    })
  }, [categoryid]);
  
  return (
    <ItemList listproductos={products}/>
  )
}

export default ItemListContainer