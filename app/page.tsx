"use client"

import React from 'react'
import Contactus from './components/Contactus'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useState } from 'react';
import VideoSplashScreen from './components/VideoSplashScreen'

const page = () => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleVideoEnd = () => {
        setIsVideoPlaying(false);
    };
  
  
  
  
  return (
    <>
            {isVideoPlaying ? (
                <VideoSplashScreen onVideoEnd={handleVideoEnd} />
            ) : (
                <div className=' animate-fadeIn 1s ease-in-out'>
                    <Navbar />
                    <Hero />
                    <Contactus />
                </div>
            )}
        </>
    );
}

export default page 