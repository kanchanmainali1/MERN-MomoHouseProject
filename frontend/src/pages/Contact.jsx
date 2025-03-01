import React from 'react'
import { NavLink } from 'react-router-dom'
import momoImage from '../assets/momoImage.png'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'



function Contact() {

  

  return (
    <div>

<section className="bg-gray-50 py-16">
   
      <div className="text-center">
        <h2 className="text-teal-700 text-3xl font-semibold">Our Contact</h2>
        <p className="text-gray-600 text-sm mt-2 uppercase">Get in Touch</p>
        <p className="text-orange-600 font-bold text-lg mt-2">
          Our Friendly Team would love to hear from you
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
     
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-orange-500 mb-4">

          </div>
          <h3 className="text-lg font-bold text-gray-800">Location</h3>
          <p className="text-gray-600 mt-2">
            New Baneshwor -41201, <br />
            Kathmandu, Bagmati, Nepal
          </p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-orange-500 mb-4">
            
          </div>
          <h3 className="text-lg font-bold text-gray-800">Phone</h3>
          <p className="text-gray-600 mt-2">
            <strong>Mobile:</strong> (+977) 980 5689789 <br />
            <strong>Mobile:</strong> (+977) 9841 275897 <br />
            <strong>Tel:</strong> 01-4783972
          </p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="text-orange-500 mb-4">
           
          </div>
          <h3 className="text-lg font-bold text-gray-800">Service Time</h3>
          <p className="text-gray-600 mt-2">
            <strong>Mon - Fri:</strong> 8 am - 8 pm <br />
            <strong>Sat - Sun:</strong> Closed
          </p>
        </div>
      </div>
    </section>
    <div className="flex flex-col md:flex-row gap-8 p-8">


      {/* Here should me map section
      */}

      <div className="md:w-1/2 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h2>
        <p className="text-gray-600 mb-6">
          If you have any queries, send us a message. Our friendly team would love to hear from you.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">What can we do for you</option>
            <option value="support">Support</option>
            <option value="inquiry">Inquiry</option>
            <option value="feedback">Feedback</option>
          </select>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
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
  )
}

export default Contact