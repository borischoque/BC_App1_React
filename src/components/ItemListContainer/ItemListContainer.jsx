import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import {useParams} from "react-router-dom";
import {collection, getDocs, getFirestore,query,where} from 'firebase/firestore';

const ItemListContainer = () => {

  const {categoryid} = useParams();

  // }
  // DEFINO EL ESTADO DE PRODUCTOS
  const [products, Setproducts] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const selecction = collection(db, 'listaproductosBC');

    if (!categoryid){
      getDocs(selecction).then( (res) => {
        Setproducts(res.docs.map(item => ({id: item.id, ...item.data()})))
    })
    }else{
      const selecction2 = query(selecction, where('category','==',categoryid))
      getDocs(selecction2).then( (res) => {

        Setproducts(res.docs.map(item => ({id: item.id, ...item.data()})))
    })
    }

}, [categoryid]);
  
  return (
    <ItemList listproductos={products}/>
  )
}

export default ItemListContainer