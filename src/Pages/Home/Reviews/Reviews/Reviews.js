import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch('https://boiling-waters-50126.herokuapp.com/reviews')
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    },[])
    return (
      <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{color: 'red' , mt: 10  , mb:5}} gutterBottom variant="h3" component="div">
          Reviews
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {reviews.map((review, index) => (
          <Grid item xs={4} sm={4} md={4} key={index} >
           <Review
           key={review.name}
           review ={review}
           ></Review>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
    );
};

export default Reviews;