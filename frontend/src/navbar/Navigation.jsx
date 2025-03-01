import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import momoImage from '../assets/momoImage.png'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { AuthContext } from "../context/authProvider";
import { IoMdLogOut } from "react-icons/io";






function Navigation() {
  const {state,dispatch}=useContext(AuthContext)
  console.log(state.token)
  return (
    <div className=" flex justify-around items-center p-4">
      <div className=" flex justify-center items-center">
       <img  className='h-7'src={ momoImage} alt="" />
        <NavLink to="/">Momos</NavLink>
      </div>

      <div className="flex justify-center items-center gap-8">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/service">Our Services</NavLink>
        <NavLink to="/allergyAdvice">Allergy Advice</NavLink>
{
  state.token?(
  <NavLink onClick={()=>{
    dispatch({type:"LOGOUT"})
  }} to="/logout"><IoMdLogOut size={25}/></NavLink>
  ):(
<div>
  <NavLink to="/login">Login</NavLink>
  <NavLink to="/signup">SignUp</NavLink>
</div>
  )
}


       


      </div>

      <div className="flex justify-center items-center gap-4 ">
        
        <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank">
        <IoLogoFacebook/>
        </NavLink >
        <NavLink  className=' bg-slate-400 rounded-full'to='https://www.tiktok.com/' target="_blank">
  
        <AiFillTikTok/>
        </NavLink >
    <NavLink  className=' bg-slate-400 rounded-full'to='https://www.instagram.com/' target="_blank">
    <FaSquareInstagram/>
    </NavLink>
      
        <NavLink className='bg-orange-600 rounded-full py-1 px-2 text-white' to="/contact">Contact Us</NavLink>
      
      </div>
    </div>
  );
}

export default Navigation;
