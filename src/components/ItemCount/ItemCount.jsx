import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ItemCount = ({stock,initial,onAdd}) => {

    // Seteo de estados
    const [initialValue, SetinitialValue] = useState(initial);
    const [stockValue, SetstockValue] = useState(stock);
    
    // Funciones Auxiliares
    // Función para aumentar la cantidad de compra
    const addCant = () =>{
        if(stockValue > 0){
            
            SetinitialValue(initialValue + 1);
            SetstockValue(stockValue - 1);
        };
    };
    
    // Función para disminuir la cantidad de compra
    const lessCant = () => {
        if(initialValue > 0){
            SetinitialValue(initialValue - 1);
            SetstockValue(stockValue + 1);
        }
    }

    return (
        
        <Container sx={{backgroundColor: 'red', opacity:0.7,}}>
            
            <Typography variant="h4">
            {`STOCK DE PRODUCTO: ${stockValue} uni`}
            </Typography>
            <Box sx={{mt:1, display:'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white',}}>
                <Button onClick={ () => {lessCant()}} size="small" variant="contained">
                    <Typography variant="h4">
                        -
                    </Typography>
                </Button>
                <Typography variant="h4">
                    {`${initialValue} Uni.`}
                </Typography>
                <Button onClick={ () => {addCant()}} size="small" variant="contained">
                    <Typography variant="h4">
                        +
                    </Typography>
                </Button>
            </Box>
            <Box sx={{mt:1, display:'flex', alignItems: 'center',justifyContent: 'center'}}>
                <Button onClick={ () =>{ onAdd(initialValue) }} size="small" variant="contained">
                        <Typography variant="h6">
                            Agregar al carrito
                        </Typography>
                </Button>
            </Box>
        </Container>
    )
}

export default ItemCount