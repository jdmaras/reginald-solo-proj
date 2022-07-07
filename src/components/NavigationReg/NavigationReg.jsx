import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import './NavigationReg.css';
import { useSelector } from 'react-redux'


export const NavigationReg = () => {
  const user = useSelector((store) => store.user);

  const [nav, setNav ] = useState(false)
    // when you click the handle click, it sets to opposite of false that the state is set at
    // then it drops down the mobile side app
    const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen h-[100px] my-10 bg-orange-300 drop-shadow-lg'>
        {/* this is the container px-10 is the padding on each side to be 10 */}
        <div className='px-6 flex justify-between items-center w-full h-full'>
        
            <div className='flex items-center'>
              <Link to="/home">
                <div className='w-24 relative'>
                    <img src="https://i.imgur.com/UCmrBSS.png" />
                        <div className="opacity-0 hover:opacity-100 duration-300 absolute mt-14 inset-2 items-center text-2xl p-4 text-orange-400 font-bold">
                            <p className='homeText'>HOME</p>
                        </div>
                
                </div>
                </Link>
                
                {/* mr - margin right / sm:text 4xl - text will be 3xl and if they switch the screen sizes, it adjusts (mostly a mobile type thing) */}
                <h1 className='text-med font-bold mr-3 sm:text-4xl'>REGINALD</h1>
                <ul className='hidden md:flex '>
                  <Link to="/registration">
                  <button className='border-none bg-transparent text-black'><li>FAN CLUB</li></button>
                  </Link>
                  <Link to ="/inforeg">
                  <button className='border-none bg-transparent text-black'><li>INFO</li></button>
                  </Link>
                  <Link to="/merch">
                  <button className='border-none bg-transparent text-black'><li>MERCH</li></button>
                  </Link>
                </ul>
            </div>
            <div className='flex space-x-4'>
              <Link to="/login">
                <button className='border-none bg-transparent text-black mt-3'>SIGN IN</button>
              </Link>
            <div className='hidden md:flex pr-2'>
                <Link to="/registration">
                  <button className='px-6 py-3'>BECOME A FAN</button>
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

