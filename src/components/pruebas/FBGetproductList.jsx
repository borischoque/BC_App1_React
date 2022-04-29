import React, {useEffect, useState} from 'react';
import {collection, getDocs, getFirestore,query,where} from 'firebase/firestore';

const FBGetproductList = () => {

    const [productos, SetProductos] = useState([])

    useEffect(() => {
        const db = getFirestore();
        // const selecction = query(collection(db, 'listaproductosBC'), where('category','==','perfume'));

        const selecction1 = collection(db, 'listaproductosBC');

        const selecction2 = query(selecction1, where('category','==','desodorante'));
    
        getDocs(selecction2).then( (res) => {
            // console.log(res.docs)
            SetProductos(res.docs.map(item => ({id: item.id, ...item.data()})))
            // const union = {id: res.id, ...res.data()};
            // SetProducto(union);
            // console.log(union)
        })

    }, []);

  return (
    <>
    {productos.length ? <div>{JSON.stringify(productos)}</div>:'Loading...' }
    </>
  )
}

export default FBGetproductList