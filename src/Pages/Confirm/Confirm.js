import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import './Confirm.css'
import Header from '../Shared/Header/Header'
import { Button,  CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { FadeLoader } from 'react-spinners';
import Footer from '../Shared/Footer/Footer';

const Confirm = () => {
  const {id} = useParams()
  const [products, setProducts] = useState([])
  const {user} = useAuth()
  const { register, handleSubmit , reset ,formState: { errors } } = useForm();
  
  useEffect(()=>{
      fetch('https://boiling-waters-50126.herokuapp.com/products')
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          setProducts(data)
      });
  },[user])

  const product = products?.find(fd => fd.id == id )

  const onSubmit = (data) => {
    console.log(data)
      data.title = product.title
      data.img = product.img
      Swal.fire(
          'SuccessFully Added',
          'Your file has been added.',
          'success');
          
      fetch("https://boiling-waters-50126.herokuapp.com/addpurchase", {
        method: "POST",
        headers: { 
            "content-type": "application/json"
           },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) =>{
            if(result._id){
              Swal.fire(
              'Added!',
              'Your file has been Added.',
              'success');
            }
            
        })
        reset();
  };
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },1000)
  },[])

  return (
    <div />
      <br />
      <Typography variant="body1" >
      to Buy , Fill the Form
      </Typography>

    </CardContent>
 
    </div>
  
  

  <br />
  <br />
  <br />
  
    <div className="confirm-form">
      <h1 className="h1">Fill this Form , Please!!!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      
       
      <input className="input" placeholder="Your Name"   defaultValue={user?.displayName} {...register("name")} /> 
      <br />
      <input  className="input" defaultValue={user?.email} {...register("email", { required: true })} />
      {errors.email && <span style={{color:"red"}}>This field is required</span>}
      <br />
      
      <input className="input"  placeholder="Hosen Pur , Lal Mosjid , Sirajgonj " {...register("address", { required: true })} /> 
      <br />
      <input className="input" placeholder="01******" {...register("Number", { required: true })} /> 
      <br />
      <Button variant="contained" color="success"  type="submit">Purchase Product</Button>
      
      </form>
    </div>
  
  
</div>
}
<Footer></Footer>
    </div>
   
  );
};

export default Confirm;