import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/images/logo.svg';

function Footer() {
    return (
        <>
            <footer className = 'flex flex-col main-green h-fit justify-center gap-7 md:flex-row-reverse md:gap-20'>
                <div className ='flex flex-col items-center gap-7 md:gap-20 md:flex-row'>
                    <div className ='flex flex-col items-center clamp-text-2'>
                        <Link to='/' className = "footer-link ">Terms and Services</Link>
                        <Link to='/' className = "footer-link ">About Cars-talog</Link>
                        <Link to='/' className = "footer-link ">Contact Us</Link>
                        <Link to='/' className = "footer-link ">Help Center</Link>
                    </div>

                    <div className='flex flex-col items-center clamp-text-2' >
                        <Link to='/' className = "footer-link">Copyright</Link>
                        <Link to='/' className = "footer-link">Privay Policy</Link>
                        <Link to='/' className = "footer-link">FAQs</Link>
                        <Link to='/' className = "footer-link">Accessibilities</Link>
                    </div>

                    <div className='footer-links-3 flex flex-row items-center m-4 gap-4 md:flex-col md:items-start'>
                        <h1 className='text-white text-lg font-bold'>Brands</h1>
                        <div className = 'flex flex-row flex-wrap gap-2 clamp-text-2 md:flex-col md:items-start'>
                            <Link to='/' className = "footer-link">Ferrari</Link>
                            <Link to='/' className = "footer-link">Mercedes-Benz</Link>
                            <Link to='/' className = "footer-link">Porsche</Link>
                            <Link to='/' className = "footer-link">Hyundai</Link>
                            <Link to='/' className = "footer-link">Toyota</Link>
                            <Link to='/' className = "footer-link">Ford</Link>
                            <Link to='/' className = "footer-link">Subaru</Link>
                            <Link to='/' className = "footer-link">BMW</Link>
                            <Link to='/' className = "footer-link">Hyundai</Link>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-row justify-around items-center md:flex-col md:justify-center md:items-center">
                    <Logo className = 'clamp-logo'/>
                    <div className='contact-us flex justify-center items-center'>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">FB</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1" >IG</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">Threads</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">X</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">Reddit</Link>
                    </div>
                    <p className='text-white clamp-text-1'>Cars-talog © 2024. All Right Reserved</p>
                </div>
                
               
            </footer>
        </>
        /* <>
            <div className='flex flex-row main-green h-fit justify-center gap-20'>
                <div className = "flex flex-col justify-center items-start">
                    <div className='contact-us flex ml-4 justify-center items-center'>
                    <Link to='/' className = "ml-5 text-white font-light">FB</Link>
                    <Link to='/' className = "ml-5 text-white font-light">FB</Link>
                    <Link to='/' className = "ml-5 text-white font-light">FB</Link>
                    <Link to='/'className = "ml-5 text-white font-light">FB</Link>
                    <Link to='/' className = "ml-5 text-white font-light">FB</Link>
                    </div>
                    <p className='text-white'>Cars-talog © 2024. All Right Reserved</p>
                </div>
                
                <div className='flex flex-col footer-links-1 justify-center items-start'>
                    <Link to='/' className = " text-white font-light">Terms and Services</Link>
                    <Link to='/' className = "text-white font-light">About Cars-talog</Link>
                    <Link to='/' className = "text-white font-light">Contact Us</Link>
                    <Link to='/' className = "text-white font-light">Help Center</Link>
                </div>
                <div className='flex flex-col footer-links-2 justify-center items-start'>
                    <Link to='/' className = "text-white font-light">Copyright</Link>
                    <Link to='/' className = "text-white font-light">Privay Policy</Link>
                    <Link to='/' className = "text-white font-light">FAQs</Link>
                    <Link to='/' className = "text-white font-light">Accessibilities</Link>
                </div>
                <div className='flex flex-col footer-links-3 justify-center items-start mt-4 mb-4'>
                    <h1 className = 'text-white text-lg font-bold'>Brands</h1>
                    <Link to='/' className = "text-white font-light">Ferrari</Link>
                    <Link to='/' className = "text-white font-light">Mercedes-Benz</Link>
                    <Link to='/' className = "text-white font-light">Porsche</Link>
                    <Link to='/' className = "text-white font-light">Hyundai</Link>
                    <Link to='/' className="text-white font-light">Toyota</Link>
                    <Link to='/' className="text-white font-light">Ford</Link>
                    <Link to='/' className="text-white font-light">Subaru</Link>
                    <Link to='/' className="text-white font-light">BMW</Link>
                    <Link to='/' className = "text-white font-light">Hyundai</Link>
                </div>
            </div>
        </> */
    );
}

export default Footer;