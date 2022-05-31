import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material';

const Review = ({review}) => {
    const {Name, img , description , rating ,job} = review

    return (
        <Card sx={{ maxWidth: 345  ,  boxShadow: 0 , bgcolor:'#f6f1e1' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            style={{width:'120px' , height:'120px' , margin: '0 auto' , borderRadius :'50%'}}
            image={img}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {Name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <Rating name="read-only" value={rating} readOnly precision={0.5} />
            
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            “{description.slice(0,150)}”
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Profession : {job}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
};

export default Review;