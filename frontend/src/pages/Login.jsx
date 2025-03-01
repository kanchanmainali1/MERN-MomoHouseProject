import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authProvider";

function Login() {
  const [email, setEmail]=useState()
  const[password,setPassword]=useState()

  const {dispatch}=useContext(AuthContext)  
  const navigate=useNavigate()
  const loginUser= async (e)=>{
    e.preventDefault()
    // console.log("Login")
    // console.log(email,password)
try{
  let response=await fetch("http://localhost:9000/api/user/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({email,password})
  })
  response=await response.json()
  console.log(response)
  if(response.message==="Login Success"){
    alert(response.message)
    dispatch({type:"LOGIN",payload:{token:response.token}})
    //localStorage.setItem("auth-token",response.token)
   // localStorage.setItem("user",JSON.stringify(response.user))
    navigate("/")
  }
  else{
    alert(response.message)
  }




}
catch(e){
  console.log("Error in Login",e)
  alert("An error occured while logging in")
}


  

  }
  return (
    <div>
      <form  onSubmit={loginUser} className='shadow-orange-700 shadow-xl w-96 m-auto mt-28 p-5 rounded-xl'>
        <label htmlFor="email">Email</label> <br />
        <input onChange={(e)=>{
          setEmail(e.target.value)

        }}
          type="email"
          id="email"
          placeholder="Enter your Email"
          required
          value={email}
          className="border-orange-600 rounded-xl p-2 border-2 outline-none w-72"
          
        />
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
        onChange={(e)=>{
          setPassword(e.target.value)

        }}
          type="password"
          id="password"
          placeholder="Enter your Password"
          required
          value={password}
          className="border-orange-600 rounded-xl p-2 border-2 outline-none w-72"
        />
        <br />
        <button type="submit"  className="bg-orange-600  rounded-2xl w-72 text-white p-3 mt-3 hover:bg-orange-700">Login</button>
      </form>
    </div>
  );
}

export default Login;
