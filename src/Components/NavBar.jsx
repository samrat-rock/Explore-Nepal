import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Destination from '../Pages/Destination';
import AboutNepal from '../Pages/AboutNepal';
import DestinationDetail from '../Pages/DestinationDetail';
import Footer from './Footer';
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

function NavBar() {
  return (
    <>
      <nav className='pl-[20px]  w-full bg-cover bg-center bg-gradient-to-r from-[#000000a8] 
            to-[#000000a8] sticky top-0 z-50 transition-colors duration-300'>
       
          <div className='flex gap-2 items-center justify-between'>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/800px-Emblem_of_Nepal.svg.png" alt="" className='w-[100px]'/>
              <p className='font-bold font-serif text-white'>Explore Nepal</p>
            </div>
            <div className='pr-[30px] font-bold font-serif text-white hidden lg:block'>
              <ul className='flex gap-[80px]'>
                <li className='hover:text-blue-300'>
                  <Link to="/">Home</Link>
                </li>
                <li className='hover:text-blue-300'>
                  <Link to="/aboutnepal">About Nepal</Link>
                </li>
                <li className='hover:text-blue-300'>
                  <Link to="/destination">Destinations</Link>
                </li>
                <li className='hover:text-blue-300'>Contact</li>
              </ul>
            </div>
            <div>
              <ul className='flex gap-[20px] pr-[20px] text-2xl'>
                <li className='text-blue-600'><FaFacebookSquare /></li>
                <li className='text-red-300'><FaInstagram /></li>
                <li><RiTwitterXLine /></li>
                <li className='text-red-600'><FaYoutube /></li>
              </ul>
            </div>
          </div>
        
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutnepal" element={<AboutNepal />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default NavBar;