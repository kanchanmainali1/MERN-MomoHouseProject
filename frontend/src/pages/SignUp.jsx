import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const navigate=useNavigate()
  const SignUpForm=async(e)=>{
    e.preventDefault()
    try{

      let response=await fetch("http://localhost:9000/api/user/createUser",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({name,password,email,phone}),
      })
      if(response.ok){
        response=await response.json()
        alert(response.message)
        console.log(response)
        setEmail('')
        setName('')
        setPassword('')
        setPhone('')
        navigate('/login')  
      }
      else{
        response=await response.json()
        alert(response.message)
        console.log(response)
      }

    }
    catch(e){
      console.log("Error in form Submission",e)
      alert("An error occured while submitting the form") 
    }

   
    
  }
  return (
    <div>
<form onSubmit={SignUpForm} className='shadow-orange-700 shadow-xl w-96 m-auto mt-28 p-5 rounded-xl'>

<label htmlFor="name">Name</label><br />
<input 
onChange={(e)=>{
  setName(e.target.value)
}}
className="border-orange-600 rounded-xl p-2 border-2 outline-none w-72"
type="text" id='name' placeholder='Enter your Name' required
value={name}
/> <br />

<label htmlFor="phone">Phone</label> <br />
<input
onChange={(e)=>{
  setPhone(e.target.value)
}}
className="border-orange-600 rounded-xl p-2 border-2 outline-none w-72"
type="text" id='phone' placeholder='Enter your PhoneNumber' required
value={phone}
/> <br />

<label htmlFor="email">Email</label>  <br />
<input
onChange={(e)=>{
  setEmail(e.target.value)
}}
className="border-orange-600 rounded-xl p-2 border-2 outline-none w-72"
type="email" id='email' placeholder='Enter your Email' required
value={email}
/> <br />

<label htmlFor="password">Password</label> <br />
<input
onChange={(e)=>{
  setPassword(e.target.value)
}}
className="border-orange-600 rounded-xl p-2 border-2 outline-none w-72"
type="password" id='password' placeholder='Enter your Password' required
value={password}
/> <br />

<button type='submit' className="bg-orange-600  rounded-2xl w-72 text-white p-3 mt-3 hover:bg-orange-700">SignUp</button>




















</form>

    </div>
  )
}

export default SignUp