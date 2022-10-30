import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom'
const Register = () => {
  const[email,setEmail]=useState('')
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[password,setPassword]=useState('')
  const[cpassword,setCPassword]=useState('')
  const[phoneNumber,setPhoneNumber]=useState('')
  
  const navigate=useNavigate()
  const submit=()=>{
    console.log('submit')
    if(firstName.length>0 && email.length>0  && lastName.length>0 && password.length>0 && cpassword.length>0){
    let obj={
      firstName:firstName,
      lastName:lastName,
      email:email,
      phoneNumber:phoneNumber,
      password:password,
      cpassword:cpassword,
      role:role
    }
    console.log(obj)
    navigate('/login')
    }else{
      alert('You must add all the necessary info')
    }
    if(cpassword!=password){
      alert('Password does not match')
    }
  }
  return (
  <div className="register">
 
    <h1>Register</h1>
    <form method='post'>
    <div className="register-text">
    <div className="inputs">
        <p>First Name</p>
        <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      </div>
      <div className="inputs">
        <p> Last Name</p>
        <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      </div>

      <div className="inputs">
        <p>Email</p>
        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

   
      <div className="inputs">
        <p>Phone Number</p>
        <input placeholder="Enter phone number"  value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </div>

      <div className="inputs">
        <p>Password</p>
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
      </div>

      <div className="inputs">
        <p> Confirm password</p>
        <input type='password' value={cpassword} onChange={(e)=>setCPassword(e.target.value)}/>
      </div>
    </div>
      
      <button onClick={submit} className="register-btn">Submit</button>
    </form>
  </div>
  )
}

export default Register
