import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const login=()=>{
    console.log('login')
    if(email.length>0  && password.length>0){
      let obj={
        email:email,
        password:password,
      }
      console.log(obj)
      }else{
        alert('Missing username or password')
      }
      //add password verification with database and hash code of the password
    }
   return (
   <div className = "login option">
    <div className="login login-row">
    <div className="login-text">
      <h1 className = "loginTitle">Login here</h1>
    <form method = 'post'>
      <div className="inputs">
        <p className = "userInput">Email</p>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder= "Email"/>
      </div>
    
    <div className="inputs">
        <p className = "userInput">Password</p>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
      </div>
      </form>
      <h2>
        Don't you have an account?
        <Link to="/register">Register</Link>

         </h2>
    </div>
    <img src="login-image.svg"/>
    </div>
   
   
         <button onClick={login} className="login-btn">Login</button>

  </div>)
}

export default Login

