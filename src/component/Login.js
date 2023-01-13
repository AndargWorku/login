import React from 'react'
import {useDispatch} from "react-redux"
import {login} from "../features/userSlice"
import './Login.css'
import {useState} from "react"
const Login = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

  const dispatch=useDispatch();
    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn:true
      }));
      
    }
  return (
    <div className="login">
        
        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login pages </h1>
            <input type="name" 
            placeholder="Name" 
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" 
            placeholder="email" value={email} 
            onChange={(e)=>setEmail(e.target.email)}/>
            <input type="password" 
            placeholder="password"
             value={password} 
             onChange={(e)=>setPassword(e.target.password)}/>

        <button className="button">submit</button>
       
        </form>
       
    </div>
  )
}

export default Login
