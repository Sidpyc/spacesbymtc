'use client';

import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { 

                setShowNavbar(false);
            } else { 

                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY); 
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <>
            <nav className={`fixed flex justify-between w-full p-5 bg-white bg-opacity-30 backdrop-blur-md shadow-lg z-10 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='text-white'>
                    <h1>Logo</h1>
                </div>

                <div className='flex items-center'>
                    <ul className='hidden md:flex gap-5 text-white'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Offerings</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                    <div className='md:hidden text-white ml-4'>
                        <button onClick={handleToggleMenu}>
                            <RxHamburgerMenu size={25} className={ ` transition-transform duration-1000 ${showNavbar && toggleMenu ? 'rotate-90' : ''}`} />
                        </button>
                    </div>
                </div>

                <div className='text-white hidden md:block'>
                    <a href="#">Contact Us</a>
                </div>
            </nav>

            {toggleMenu && showNavbar &&(
                <div className="fixed top-16 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-10 p-5 md:hidden animate-fadeInDown">
                    <ul className='flex flex-col gap-5 text-black'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Offerings</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
