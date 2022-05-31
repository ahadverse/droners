import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, CircularProgress, Container, FormControl, Grid, IconButton, Input, InputAdornment,  InputLabel,  TextField,  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import './SignUp.css'
import { NavLink , useLocation ,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const img = 'https://i.ibb.co/7GtxxfN/imgbin-parrot-rolling-spider-parrot-ar-drone-parrot-minidrones-rolling-spider-unmanned-aerial-vehicl.png'
const image = 'https://i.ibb.co/6t3WvVP/imgbin-helicopter-airplane-first-person-view-quadcopter-unmanned-aerial-vehicle-png.png'
const image2 = 'https://i.ibb.co/ZgmTMrz/imgbin-parrot-bebop-drone-parrot-rolling-spider-parrot-ar-drone-unmanned-aerial-vehicle-quadcopter-p.png'
const image3 = 'https://i.ibb.co/w423Jd6/imgbin-helicopter-rotor-quadcopter-unmanned-aerial-vehicle-gopro-png.png'

const img4 = 'https://i.ibb.co/mCs8hcy/imgbin-helicopter-quadcopter-unmanned-aerial-vehicle-gopro-camera-png.png'
const SignUp = () => {

   const { user , registerUser , googleLogin  , error} = useAuth()
   const location = useLocation()
   const history = useHistory()

  const [loginData, setLoginData] = useState({
    name :'',
    email: '',
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false,
  });


    const handleSubmit = e =>{
     

      if(loginData.password !== loginData.password2){
        alert('password didnt matched')
      }
     
      registerUser(loginData.name ,loginData.email ,  loginData.password , location ,history )
     
      e.preventDefault()
    }

    
      
    const handleChange = (prop) => (event) => {
       
        setLoginData({ ...loginData, [prop]: event.target.value });
        
      };

    const handleClickShowPassword = () => {
        setLoginData({
          ...loginData,
          showPassword: !loginData.showPassword,
          showPassword2: !loginData.showPassword2,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      //--------------------------------------------- google login 
      const handleGoogle =()=>{
        googleLogin(location , history)
      }

      
    return (
        <div className="sign">
          <Box>
            <Grid container spacing={2}>
          
                <Grid item xs={12} sm={6}>

                <Typography variant="h4" sx={{ pt: 15 ,color:'White' , fontWeight:'700'}} gutterBottom component="div">
                   Register
                </Typography>
                <form onSubmit={handleSubmit}>
                <TextField 
                onChange={handleChange('name')}
                sx={{ m: 1, width: '75%' }}
                id="standard-basic" 
                label="Your Name" 
                variant="standard" />
                <TextField 
                onChange={handleChange('email')}
                sx={{ m: 1, width: '75%' }}
                id="standard-basic" 
                label="Email" 
                variant="standard" />
                <br />

             <FormControl sx={{ m: 1, width: '75%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={loginData.showPassword ? 'text' : 'password'}
                        value={loginData.password}
                       
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {loginData.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
             <FormControl sx={{ m: 1, width: '75%' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={loginData.showPassword2 ? 'text' : 'password'}
                        value={loginData.password2}
                        onChange={handleChange('password2')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {loginData.showPassword2 ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
        
                <br />
                <NavLink style={{textDecoration:'none'}} to="/login"> <Button variant="text">Already Register ?? please login</Button></NavLink>
                <br />
                <Button sx={{ m: 1, width: '50%' , color:'#0af3ff' }} type="submit" variant="contained" >
                Register
                </Button>
                </form>


                <Button sx={{ m: 1, width: '50%' , }} onClick={handleGoogle} variant="contained" >
                Google
                </Button>
                
                  {
                    user?.email && <Alert variant="filled" severity="success">Congratulations , Now You're a Customer!</Alert>
                  }
                  {
                    error && <Alert severity="error">{error}!</Alert>
                  }
                </Grid>
             </Grid> 
        </Box>
        <div className="drones">
          <img src={img} alt="" />
          <img src={image} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={img4} alt="" />
         
        </div>
        </div>
    )
};

export default SignUp;