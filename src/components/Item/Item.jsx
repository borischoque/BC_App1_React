import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { deepPurple } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import {Link as RouterLink} from 'react-router-dom';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Item = ({title,letra,imageSrc,id}) => {

  return (
    <Card sx={{ maxWidth: 300, backgroundColor:'#ebe1d9', mx:'auto'}}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{letra}</Avatar>
            }

            titleTypographyProps={{variant:'h5' }}
            title={title.toUpperCase()}
        />
        <CardMedia style={{height: 200, width: 200}} image={imageSrc}/>
        <CardActions>
            <Button 
              size="small"
              component={RouterLink}
              to={`/item/${id}`}
            >
              VER DETALLE DE PRODUCTO
            </Button>
        </CardActions>
    </Card>
  )
}

export default Item