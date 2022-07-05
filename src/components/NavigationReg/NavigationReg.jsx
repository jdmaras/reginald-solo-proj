import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import './NavigationReg.css';


export const NavigationReg = () => {
  const [nav, setNav ] = useState(false)
    // when you click the handle click, it sets to opposite of false that the state is set at
    // then it drops down the mobile side app
    const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen h-[100px] my-10 bg-orange-300 drop-shadow-lg'>
        {/* this is the container px-10 is the padding on each side to be 10 */}
        <div className='px-6 flex justify-between items-center w-full h-full'>
        
            <div className='flex items-center'>
                <div className='w-24 relative'>
                    <img src="https://i.imgur.com/UCmrBSS.png" />
                        <div className="opacity-0 hover:opacity-100 duration-300 absolute mt-14 inset-2 items-center text-2xl p-2 text-orange-400 font-bold">
                        <p className='homeText'>HOME</p>
                        </div>
                
                </div>
                
                {/* mr - margin right / sm:text 4xl - text will be 3xl and if they switch the screen sizes, it adjusts (mostly a mobile type thing) */}
                <h1 className='text-med font-bold mr-3 sm:text-4xl'>REGINALD</h1>
                    {/* anything below a medium screen will hide in the drop down */}
                <ul className='hidden md:flex '>
                    <li>FAN CLUB</li>
                    <li>ABOUT</li>
                    <li>MERCH</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-2'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Become A Fan</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {/* ternary for toggling the "x" to close the menu */}
                {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
            </div>
        </div>
                        {/* w-full means take full width of screen and padding of 8 pixels */}
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                            {/* border bottom 2 / color / width full */}
                <li className='border-b-2 border-zinc-300 w-full'>HOME</li>
                <li className='border-b-2 border-zinc-300 w-full'>ABOUT</li>
                <li className='border-b-2 border-zinc-300 w-full'>FAN CLUB</li>
        
            <div className='flex flex-col my-4'>
                                                {/* PY - vertical padding PX - padding width  */}
                <button className='bg-transparent text-orange-300 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Become A Fan</button>
            </div>
        </ul>
    </div>
  )
}

