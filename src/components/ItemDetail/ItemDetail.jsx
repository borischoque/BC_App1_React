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
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  return (
    <Card sx={{ maxWidth: 350, backgroundColor:'#ebe1d9', mx:'auto'}}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <ShareIcon />
                </IconButton>
            }
            sx={{textTransform: 'uppercase'}}
            titleTypographyProps={{variant:'h4' }}
            title={item.category}

        />
        <CardMedia style={{height: 250, width: 250}} image={item.src}/>
        <CardContent>
            <Typography variant="h5">
            {item.description}
            </Typography>
        </CardContent>
        <ItemCount stk={item.stock} initial={0} />

    </Card>
  )
}

export default ItemDetail