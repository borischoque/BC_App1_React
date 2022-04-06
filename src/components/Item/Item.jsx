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


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Item = ({title,description,imageSrc}) => {

  return (
    <Card sx={{ minWidth: 275 }}>
        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
            }
            action={
                <IconButton aria-label="settings">
                <ShareIcon />
                </IconButton>
            }
            title={title}
            // subheader={subTitle}
        />
        <CardMedia style={{height: 150}} image={imageSrc}/>
        <CardContent>
            <Typography variant="body2">
            {description}
            <br />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">BUY NOW</Button>
            <Button size="small">OFFER</Button>
        </CardActions>
    </Card>
  )
}

export default Item