import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// BOTON PERSONALIZADO
const ColorButton = styled(Button)(({ theme }) => ({
    height:50,
    widht:50,
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const ItemCount = ({product,stk,initial,cant}) => {

    // Seteo de estados
    const [initialValue, SetinitialValue] = useState(initial);
    const [stockValue, SetstockValue] = useState(stk);
    
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
        
        <Container>
            
            <Typography variant="h6">
            {`STOCK DE PRODUCTO: ${stockValue} uni`}
            </Typography>
            <Box sx={{mt:1, widht: 200, display:'flex' ,justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white',}}>
                <ColorButton onClick={ () => {lessCant()}} size="small" variant="contained">
                    <Typography variant="h3">
                        -
                    </Typography>
                </ColorButton>
                <Typography variant="h5">
                    {`${initialValue} Uni.`}
                </Typography>
                <ColorButton onClick={ () => {addCant()}} size="small" variant="contained">
                    <Typography variant="h3">
                        +
                    </Typography>
                </ColorButton>
            </Box>
            <Box sx={{mt:1, display:'flex', alignItems: 'center',justifyContent: 'center'}}>
                <Button onClick={ () => {
                    cant({...product,initialValue})
                    }
                } 
                    size="small" 
                    variant="contained">
                        <Typography variant="h6">
                            Agregar al carrito
                        </Typography>
                </Button>
            </Box>
        </Container>
    )
}

export default ItemCount