import React from "react";
import { NavLink } from "react-router-dom";
import aboutgirl from "../assets/aboutgirl.png";
import aboutbg from "../assets/aboutbg.png";
import aboutmomo from "../assets/aboutmomo.png";
import aboutmomo2 from "../assets/aboutmomo2.png";
import aboutmomo3 from "../assets/aboutmomo3.png";
import about1 from "../assets/about1.png";	
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import aboutassistantchef from "../assets/aboutassistantchef.png";
import aboutheadchef from "../assets/aboutheadchef.png";
import aboutassichef1 from "../assets/aboutassichef1.png";
import momoImage from '../assets/momoImage.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


function About() {
  return (
    <div>
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 flex ">

          
          <div className=" ml-32">
            <h3 className="mt-20">About Us</h3>
          <h2 className="mt-10">
            We Pride Ourselves On
          </h2>
          
          <br />
          
          <p className="text-xl text-orange-600 font-bold">
            Our authentic momo recipes
          </p>
          <p className="text-2xl font-bold text-gray-800 mb-4"> passed down through generations</p>
          </div>
          
          <div className="mt-6 size-96 ml-96">
            <img src={aboutgirl} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6"></div>
          <div className="text-center">
           
            <img src={aboutbg} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div>
              <img src={aboutmomo} alt="" />
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Our momos are made with love
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing...
            </p>
          </div>
          <div className="text-center">
            <div>
              <img src={aboutmomo2} alt="" />
            </div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              Taste the difference with our handcrafted momos
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing...
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">  
              <img src={aboutmomo3} alt="" />
            </div>  
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              The perfect blend of tradition and innovation
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing...
            </p>
          </div>
        </div>
      </section>

    
      <section className="bg-white py-7">
        <div className="container  px-4 text-center flex ">
          <div className="text-xl italic text-gray-600 mt-20 ">
            Momo is not just about sustenance, it's about bringing people
            together and creating memories. At our restaurant, we strive to
            create a warm and inviting atmosphere where our guests can enjoy
            delicious momo, great company, and unforgettable experiences
            <div>
              <p className="font-semibold text-gray-800">Marcus Schleifer</p>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 ">
          <img src={about4} alt="" />
           
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-800 ">
            Meet The Team
          </h3>
          <p className="text-gray-600 mb-10">
            Our talented team members who deliver only the best results
          </p>
        </div>
        <div className="container mx-auto px-4 text-center flex gap-8">
          
          <div >
            
           
          <img src={aboutheadchef} alt="" />
         
              
            
          </div>
          <div >
           
          <img src={aboutassistantchef} alt="" />
              
            
          </div>
          <div >
           
          <img src={aboutassichef1} alt="" />
              
            
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>
          <div className="flex items-center space-x-2">
          <img src={momoImage} alt="" className="h-8 w-8" />
            <span className="text-xl font-semibold text-teal-700">momos</span>
          </div>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-teal-700">momos</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="/about" className="hover:text-teal-700">
                About Us
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-teal-700">
                Our Menu
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-teal-700">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-700">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-teal-700">Legals</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="/terms" className="hover:text-teal-700">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-teal-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-teal-700">
                Support
              </a>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-teal-700">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
          <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank"></NavLink>
          <FaFacebook/>
          <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank"></NavLink>
          <FaLinkedin/>
          <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank"></NavLink>
          <FaTwitter/>
          
          
          </div>
          <div className="mt-4 flex space-x-4">
          <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank"></NavLink>
          <FaYoutube/>
          <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank"></NavLink>
          <FaInstagram/>
          <NavLink  className=' bg-slate-400 rounded-full'to='https://www.facebook.com/' target="_blank"></NavLink>
          <FaTiktok/>
          
          
          </div>
        </div>
      </div>

      
      <div className="bg-gray-100 text-gray-500 py-4 text-center text-sm border-t border-gray-300">
        Copyright ©2023 Everest Momo Pvt Ltd. All Rights Reserved.
      </div>
    </footer>

    </div>
  );
}

export default About;
