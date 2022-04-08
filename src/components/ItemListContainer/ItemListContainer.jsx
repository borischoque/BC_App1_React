import React, { useEffect, useState } from 'react';
import functionPromise from '../../functions/functionPromise';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  // const onAdd = (value) => {
  //   console.log(`Se envia al carrito el valor ${value} Unidades para realizar la compra.`);
  // }
  // DEFINO EL ESTADO DE PRODUCTOS
  const [products, Setproducts] = useState([]);
  
  // DEFINO LA LISTA DE PRODUCTOS
  const productos = [
    {id:1, title: 'Perfume', description: 'Aroma Especial, oferta de la semana',src:'https://mui.com/static/images/cards/paella.jpg'},
    {id:2, title: 'Desodorante', description: 'NO tiene oferta',src:'https://mui.com/static/images/cards/paella.jpg'},
    {id:3, title: 'Producto 3', description: 'NO tiene oferta',src:'https://mui.com/static/images/cards/paella.jpg'},
    {id:4, title: 'Producto 4', description: 'NO tiene oferta',src:'https://mui.com/static/images/cards/paella.jpg'},
    {id:5, title: 'Producto 5', description: 'NO tiene oferta',src:'https://mui.com/static/images/cards/paella.jpg'}
  ]

  useEffect(() => {

    functionPromise(productos,2000).then((res) => {
      Setproducts(res)
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  
  return (
    <ItemList listproductos={products}/>
  )
}

export default ItemListContainer