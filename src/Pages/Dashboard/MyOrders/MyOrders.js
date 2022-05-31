import { Button, Table } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const MyOrders = () => {
    const [purchase, setPurchase] = useState([]);
const {user} = useAuth()
const [control, setConrol] = useState(false);

const [loading , setLoading] = useState(false)
useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },1000)
},[])
console.log(user.email)
useEffect(() => {
  fetch(`https://boiling-waters-50126.herokuapp.com/addpurchase?email=${user.email}`)
    .then((res) => res.json())
    .then((data) => setPurchase(data));
}, [user]);

const handleDelete = (id) => {
  fetch(`https://boiling-waters-50126.herokuapp.com/addpurchase/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      
    })
  Swal.fire({
      
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  .then((result) => {
          if (result.isConfirmed) {
          Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success');
          const remainingUsers = purchase.filter(user => user._id !== id);
          setPurchase(remainingUsers)
      } else {
        setConrol(false);
      }
    });
  }
    return (
        <div className="purchases">

          {
                loading? 
                <ClipLoader
                className="m-5"
                size={60}
                color={"#123abc"}
                loading={loading}
                />
                : 
              <div>
               <h1>My Orders</h1>
                <h2>Total Orders : {purchase?.length}</h2>
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      
                      <th>Product Title</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Product Image</th>
                    </tr>
                    
                  </thead>
                  
                  {purchase?.map((purchase, index) => (
                    <tbody>
                      <tr>
                        <td>{index+1}</td>
                        <td>{purchase.title}</td>
                        <td>{purchase.name}</td>
                        <td>{purchase.email}</td>
                        <td><img style={{ width: 60 }} src={purchase.img} alt="" /></td>
                        <Button
                        key={purchase.id}
                          onClick={() => handleDelete(purchase._id)}
                          sx={{bgcolor:'red' , color:'white'}}
                        >
                          Delete
                        </Button>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>

}

        
      </div>
    );
};

export default MyOrders
;