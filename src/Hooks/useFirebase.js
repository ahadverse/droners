import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword ,signInWithPopup,GoogleAuthProvider,updateProfile ,createUserWithEmailAndPassword ,onAuthStateChanged , signOut} from "firebase/auth";
import authentication from '../Pages/Sign/Firebase/Firebase.init';

authentication()

const useFirebase = () => {

    const [user , setUser] =useState({})
    const [isLoading , setIsLoading ] = useState(true)
    const [error , setError] = useState('')
    const [ admin , setAdmin] = useState(false)
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const googleLogin =(location, history)=>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user
              
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setError('')
    
            
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            setError(error.message)
        })
        .finally(()=>setIsLoading(false));
       }
    
    const registerUser = ( name  , email , password , location, history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            const newUser = {email , displayName :name}
            setUser(newUser)
            savedUser(email , name , 'POST')
            updateProfile(auth.currentUser, {
                displayName:name, 
              })
            
           .then(() => {
                
              }).catch((error) => {
                
              });
              
            setError('')
            
         
        })
        .catch((error) => {
            const errorCode = error.code;
            setError(error.message)
            // ..
        })
        .finally(()=>setIsLoading(false))
        
    }

    // sign in user with email
        const loginUser =( email, password , location, history)=>{
        
        signInWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            
            setError('')
        
        })
        .catch((error) => {
            
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
             if (user) {
               const uid = user.uid;
               setUser(user)
           
             } else {
              setUser({})
             }
             setIsLoading(false)
           });
           return () => unsubscribed;
     },[])
 
 
                                                                // SignOut 
     const logOut =()=>{
         
         signOut(auth).then(() => {})
         .catch((error) => {
             
           })
           .finally(()=>setIsLoading(false));
     }
     const savedUser = (email , displayName , method) =>{
        const user = {email , displayName}
        console.log(user)
        fetch('https://boiling-waters-50126.herokuapp.com/users', {
            method : method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then()
        
    }
    useEffect(()=>{
        fetch(`https://boiling-waters-50126.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=> setAdmin(data.admin))
    },[user.email])

    return{
        user,
        isLoading,
        error,
        admin,
        logOut,
        googleLogin,
        registerUser, 
        loginUser,
    }
       
    ;
};

export default useFirebase;