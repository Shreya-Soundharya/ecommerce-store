import React from 'react';
import { assets } from '../assets/assets';
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <div className='flex flex-col sm:flex-row border border-gray-400'>
                {/* Hero Left Side */}
                <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                    <div className='text-[#414141]'>
                        <div className='flex items-center gap-2'>
                            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                            <p className='font-medium text-lg lg:text-2xl md:text-base'>OUR BESTSELLERS</p>
                        </div>
                        <h1 className='prata-regular text-3xl sm:py-3 lg:text-7xl leading-relaxed'>Latest Arrivals</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-3lg lg:text-2xl md:text-base'>SHOP NOW</p>
                            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                        </div>
                    </div>
                </div>
                {/* Hero Right Side */}
                <div className='hero-right w-full sm:w-1/2 flex items-center justify-center'>
                    <img className='w-full h-auto object-cover' src={assets.hero_img} alt="hero" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
