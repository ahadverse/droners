import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
   

    const onSubmit = (data) => {
        console.log(data)
        Swal.fire(
            'added!',
            'Your Product has been added.',
            'success');
        fetch('https://boiling-waters-50126.herokuapp.com/products', {
          method: "POST",
          headers: { 
              "content-type": "application/json"
             },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(data =>
            console.log(data)) 
          reset();
    };
    
    return (
    <div className="addreviews">
        <h1 className="fw-bold">Add a Product</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input className="input " placeholder="Product Name" {...register("title" , { required: true }) } />
      <br />
     
      <input className="input " placeholder="Give Img Link" type="text" name="" id="" {...register("img", { required: true })} />
      <br />
      <input className="input " type="number" placeholder="Give Rating Between 0-5" name="" id="" {...register("rating", { required: true })} />
      <br />
      <textarea className="input" placeholder="Add Description" type="textarea" name="" id="" {...register("description", { required: true })} />
    <br />
      <input className="input" placeholder="Add Price" type="number" name="" id="" {...register("price", { required: true })} />
    <br />
      <input className="input" placeholder="ID Number must be more than 15" type="number" name="" id="" {...register("id", { required: true })} />
    <br />
      <input className="input" placeholder="Product Brand" type="text" name="" id="" {...register("brand", { required: true })} />
    <br />
      <input className="input" placeholder="Product Color" type="text" name="" id="" {...register("color", { required: true })} />
    <br />
      <input className="input" placeholder="Product Model " type="text" name="" id="" {...register("model", { required: true })} />
    <br />

    <Button variant="contained" color="success"  type="submit">Purchase Product</Button>
    </form>
    </div>
  );

       
    
};

export default AddProducts;