import React from 'react';
import './AddReviews.css'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Button } from '@mui/material';


const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();
   

    const onSubmit = (data) => {
        Swal.fire(
            'added!',
            'Your Review has been added.',
            'success');
        fetch('https://boiling-waters-50126.herokuapp.com/reviews', {
          method: "POST",
          headers: { 
              "content-type": "application/json"
             },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then(data =>{
            if(data.insertedId){
                alert("Successfully reviewed")
                
            }
        }) 
          reset();
    };
    
    return (
    <div className="addreviews">
        <h1 className="fw-bold">Give us a Review</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input className="input " placeholder="Name" {...register("Name" , { required: true }) } />
      <br />
     
      <input className="input " placeholder="Give Img Link" type="text" name="" id="" {...register("img", { required: true })} />
      <br />
      <input className="input " type="number" placeholder="Give Rating Between 0-5" name="" id="" {...register("rating", { required: true })} />
      <br />
      <textarea className="input" placeholder="Add Description" type="textarea" name="" id="" {...register("description", { required: true })} />
    <br />
      <input className="input" placeholder="Your Profession" type="text" name="" id="" {...register("job", { required: true })} />
    <br />

    <Button variant="contained" color="success"  type="submit">Review</Button>
    </form>
    </div>
  );

       
    
};

export default AddReviews;