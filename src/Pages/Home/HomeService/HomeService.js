import { Button, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = ({singleService}) => {
    const {title , img ,rating,color, brand , id}=singleService
    return (
        <Card sx={{ maxWidth: 345  ,  boxShadow: 0 , bgcolor:'#aeebdd' }}>
            <CardActionArea>
                <CardMedia
                component="img"
                style={{width:'auto' , height:'150px' , margin: '0 auto'}}
                image={img}
                alt="green iguana"
                />
                <CardContent>
            
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                Rating : <Rating name="read-only" value={rating} readOnly precision={0.5} />
                </Typography>
                <Typography variant="h6" color="#ff1744">
                Brand : {brand}
                <br />
                Color : {color}
                </Typography>
           
                </CardContent>
                <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'white'}}><Button variant="contained" color="info">Purchase Now</Button></Link>
            </CardActionArea>
            
        </Card>
    );
};

export default HomeService;