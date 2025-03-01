import { NavLink } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import oneBg from "../assets/oneBg.png";
import circle from "../assets/circle.png";
import momoImage from "../assets/momoImage.png";
import momo from "../assets/momo.png";
import heroMomo from "../assets/heroMomo.png";
import buffMomo from "../assets/buffMomo.png";
import buffFryMomo from "../assets/buffFryMomo.png";
import buffCMomo from "../assets/buffCMomo.png";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 relative">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row justify-between items-center px-6 md:px-24">
        <div className="text-center md:text-left max-w-lg">
          <p className="text-red-500 font-semibold">RESTAURANT</p>
          <h1 className="text-5xl font-extrabold mt-2 leading-tight">
            The
            <span
              style={{ backgroundImage: `url(${oneBg})` }}
              className="inline-block h-16 w-36 text-center bg-cover bg-no-repeat text-white bg-center mx-2"
            >
              #One
            </span>
            Momo <span className="text-red-600">Restaurant</span>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">
            More than <span className="text-red-500 font-bold">20+ Varieties</span> of momo available for you
          </p>
          <NavLink to="/menu">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-full text-lg flex items-center">
              Explore Food Menu <MdOutlineArrowRightAlt className="ml-2 text-2xl" />
            </button>
          </NavLink>
        </div>
        <div className="relative w-56 h-40 ">
          <img className="absolute top-0 right-0 w-full " src={circle} alt="Background" />
          <img className="absolute top-10 right-10 w-80 drop-shadow-lg" src={momo} alt="Momo" />
        </div>

      </div>

      {/* Why Customers Love Us Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-24 mt-16">
        <img className="w-80" src={heroMomo} alt="Customer" />
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800">Why Customers <span className="text-red-500">Love Us</span></h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor varius non fermentum vulputate.
          </p>
          <NavLink to="/about">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-full text-lg">
              Explore Our Story
            </button>
          </NavLink>
        </div>
      </div>

      {/* Our Most Popular Recipes Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800">Our <span className="text-orange-600">Most Popular</span> Recipes</h2>
        <p className="text-gray-600 mt-2">Browse through a variety of recipes with fresh ingredients.</p>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Buff</button>
          <button className="border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Chicken</button>
          <button className="border-2 border-black px-4 py-2 rounded-full hover:bg-black hover:text-white">Veg</button>
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={buffMomo} alt="Buff Momo" />
            <p className="text-lg font-semibold">Buff Momo</p>
            <p className="text-red-500 font-bold">₹150</p>
          </div>
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={buffFryMomo} alt="Buff Fry Momo" />
            <p className="text-lg font-semibold">Buff Fry Momo</p>
            <p className="text-red-500 font-bold">₹180</p>
          </div>
          <div className="text-center">
            <img className="w-40 h-40 mx-auto" src={buffCMomo} alt="Buff C. Momo" />
            <p className="text-lg font-semibold">Buff C. Momo</p>
            <p className="text-red-500 font-bold">₹200</p>
          </div>
        </div>
        <NavLink to="/menu">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-full text-lg">Explore Our Menu</button>
        </NavLink>
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
  );
}

export default Home;
