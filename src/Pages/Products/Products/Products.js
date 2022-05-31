import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://boiling-waters-50126.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[])
    const [loading , setLoading] = useState(false)
      useEffect(()=>{
          setLoading(true)
          setTimeout(()=>{
              setLoading(false)
          },1000)
      },[])

    return (
      
        <Box sx={{ flexGrow: 1 }}>
            <Header></Header>
            {
        loading ? 
        <ClipLoader
        className="m-5"
        size={60}
        color={"#123abc"}
        loading={loading}
        />
        : 
        <Container>
        <Typography sx={{color: 'info.main' , mt: 10 }} gutterBottom variant="h3" component="div">
            Our Products
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {products.map((product, index) => (
            <Grid item xs={4} sm={4} md={4} key={index} >
             <Product
             key={product.id}
             product ={product}
             ></Product>
            </Grid>
          ))}
        </Grid>

        </Container>
}
<Footer></Footer>
      </Box>
    
    );
};

export default Products;