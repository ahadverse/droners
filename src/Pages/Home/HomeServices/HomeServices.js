import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [homeServices, setHomeServices] = useState([])
    useEffect(()=>{
        fetch('https://boiling-waters-50126.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setHomeServices(data.slice(0,6))
        })
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{color: 'info.main' , mt: 10 }} gutterBottom variant="h3" component="div">
            Our Products
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {homeServices.map((singleService, index) => (
            <Grid item xs={4} sm={4} md={4} key={index} >
             <HomeService
             key={singleService.name}
             singleService ={singleService}
             ></HomeService>
            </Grid>
          ))}
        </Grid>
        </Container>
        <Link to="/products" style={{ textDecoration: 'none', color: 'blue' }}><Button ><h1>Click here to Explore More <FaArrowRight /></h1></Button></Link>
        
        
      </Box>
    );
};

export default HomeServices;

