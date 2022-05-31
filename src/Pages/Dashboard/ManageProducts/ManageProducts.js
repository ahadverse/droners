import { Button, Table } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);

const [control, setConrol] = useState(false);

const [loading , setLoading] = useState(false)
useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },1000)
},[])

useEffect(() => {
  fetch("https://boiling-waters-50126.herokuapp.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, [control]);

const handleDelete = (id) => {
  fetch(`https://boiling-waters-50126.herokuapp.com/products/${id}`, {
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
          const remainingUsers = products.filter(user => user._id !== id);
          setProducts(remainingUsers)
      } else {
        setConrol(false);
      }
    });
  }
    return (
        <div>

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
                <h1>Manage Products</h1>
                <h2>Total Products : {products?.length}</h2>
                <Table className="purchases">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Product Image</th>
                    </tr>
                  </thead>
                  {products?.map((purchase, index) => (
                    <tbody>
                      <tr>
                        <td>{index+1}</td>
                        <td>{purchase.title}</td>

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

export default ManageProducts
;