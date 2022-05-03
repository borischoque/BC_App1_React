import React,{useContext, useEffect, useState} from 'react';
import { CartContext } from '../CartContext/CartContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {collection, addDoc, getFirestore} from 'firebase/firestore';


function FormBuy() {

    // Declaramos que contexto vamos a usar
    const {cart,totalPrice} = useContext(CartContext)

    // Seteamos un estado que controla cuando finalizo el Cheackout
    const [checkOut, SetcheckOut] = useState();

    // Estado para Monitorear los cambios sobre el total en el carro
    const [precioTotal, SetprecioTotal] = useState(0)
    useEffect(() => {
        SetprecioTotal(totalPrice(cart))
    },[cart.length])

    // Guardamos en un estado los datos del comprador
    const [nombre, Setnombre ] = useState('');
    const [telefono, Settelefono ] = useState('');
    const [email, Setemail ] = useState('');

    const terminarCompra = () =>{
        // Definimos el objeto que se subirá a la base de datos
        let buyer = {
            buyer: {nombre, telefono, email},
            items: {...cart},
            total: precioTotal
        }
        // Se procede a realizar la carga en la base de datos
        // Hacemos referencia a la colección donde se cargarán los datos.
        const db = getFirestore();
        const datosRefe = collection(db, 'ventasBC');
        // Se procede a la carga
        addDoc(datosRefe,buyer).then(({id}) => 
        SetcheckOut(id))
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Typography variant="h4"> 
            Ingresa los siguientes datos para registrar tu compra:
        </Typography>
        <Typography>
            Nombre:
        </Typography>
        <TextField 
        id="outlined-basic" 
        variant="filled" 
        color='success' 
        focused
        value={nombre}
        onChange={ (e) => {
            Setnombre(e.currentTarget.value);
        }}
        />
        <Typography>
            Numero de telefono:
        </Typography>
        <TextField 
        id="outlined-basic" 
        variant="filled" 
        color='success' 
        focused
        value={telefono}
        onChange={ (e) => {
            Settelefono(e.currentTarget.value);
        }}
        />
        <Typography>
            E-mail:
        </Typography>
        <TextField 
        id="outlined-basic" 
        variant="filled" 
        color='success' 
        focused
        value={email}
        onChange={ (e) => {
            Setemail(e.currentTarget.value);
        }}
        />
        <Button 
            size="small" 
            variant="outlined"
            onClick={ () => terminarCompra()}
            >
              <Typography variant="h6">
                  ENVIAR DATOS
              </Typography>
        </Button>
        {checkOut && 
        <Typography variant="h6">
        GRACIAS POR ELEGIRNOS¡¡
        TU CÓDIGO DE REGISTRO
         DE COMPRA ES:
         {checkOut}
        </Typography>   
        }
    </Box>
  );
}

export default FormBuy