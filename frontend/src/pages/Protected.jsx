import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/authProvider'
import {useNavigate } from 'react-router-dom'

function Protected({Comp}) {
    const navigate=useNavigate()
const {state}=useContext(AuthContext)
console.log(state.token)

   useEffect(() => {
       if(!state.token){
           navigate("/login")
       }
   }, [state, navigate])



  return <Comp/>
    
  
}

export default Protected