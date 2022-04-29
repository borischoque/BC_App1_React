import React, {useEffect, useState} from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


// 4EdNkRbGcQGtLG4SrBgU
// listaproductosBC

const FBGetProduct = () => {

    const [producto, SetProducto] = useState({})

    useEffect(() => {
        const db = getFirestore();
        const selecction = doc(db, 'listaproductosBC', '4EdNkRbGcQGtLG4SrBgU');
    
        getDoc(selecction).then( (res) => {
            // console.log(res.id);
            // console.log(res.data());

            const union = {id: res.id, ...res.data()};
            SetProducto(union);
            // console.log(union)
        })

    }, []);

  return (
    <>
    {producto.id ? <div>{`${producto.id} ${producto.description}`}</div>:'Loading...' }
    </>
  )
}

export default FBGetProduct