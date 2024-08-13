'use client';

import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <>
            <nav className="sticky top-0 flex justify-between w-full p-5 bg-white bg-opacity-30 backdrop-blur-md shadow-lg z-50">
                <div className='text-white'>
                    <h1>Logo</h1>
                </div>

                <div className='flex items-center'>
                    <ul className='hidden md:flex gap-5 text-white'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#offerings">Offerings</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                    </ul>
                    <div className='md:hidden text-white ml-4'>
                        <button onClick={handleToggleMenu}>
                            <RxHamburgerMenu size={25} className={`transition-transform duration-1000 ${toggleMenu ? 'rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                <div className='text-white hidden md:block'>
                    <a href="#contactus">Contact Us</a>
                </div>
            </nav>

            {toggleMenu && (
                <div className="fixed top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-10 p-5 md:hidden animate-fadeInDown">
                    <ul className='flex flex-col gap-5 text-black'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#offerings">Offerings</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contactus">Contact Us</a></li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
