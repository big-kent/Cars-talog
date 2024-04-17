import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '..//assets/images/logo.svg';

import Typography from '@mui/material/Typography';


function Copyright() {
  return (
    <Typography className='text-white clamp-text-1' variant="p" align="center">
        {'Cars-talog © '}{' '}{new Date().getFullYear()}{'. '}{'All Right Reserved'}
    </Typography>
  );
}

const FooterLink1 = ['Terms and Services', 'About Cars-talog', 'Contact Us', 'Help Center'];
const FooterLink2 = ['Copyright', 'Privacy Policy', 'FAQs', 'Accessibilities'];
const Brands = ['Ferrari', 'Mercedes-Benz', 'Porsche', 'Huyndai', 'Toyota', 'Ford', 'Subraru', 'BMW', 'Innova'];

function Footer() {
    return (
        <>
            <footer className = 'flex flex-col main-green h-auto justify-center gap-7 max-w-full md:flex-row-reverse md:gap-20'>
                <div className ='flex flex-col items-center gap-7 pt-10 md:gap-20 md:flex-row'>
                    <div className='flex flex-col items-center clamp-text-2'>
                        {FooterLink1.map((footerLink) => (
                            <Link to='/' className = "footer-link">{footerLink}</Link>
                        ))}
                        {/* <Link to='/' className = "footer-link ">Terms and Services</Link>
                        <Link to='/' className = "footer-link ">About Cars-talog</Link>
                        <Link to='/' className = "footer-link ">Contact Us</Link>
                        <Link to='/' className = "footer-link ">Help Center</Link> */}
                    </div>

                    <div className='flex flex-col items-center clamp-text-2' >
                        {FooterLink2.map((footerLink) => (
                            <Link to='/' className = "footer-link">{footerLink}</Link>
                        ))}
                        {/* <Link to='/' className = "footer-link">Copyright</Link>
                        <Link to='/' className = "footer-link">Privay Policy</Link>
                        <Link to='/' className = "footer-link">FAQs</Link>
                        <Link to='/' className = "footer-link">Accessibilities</Link> */}
                    </div>

                    <div className='footer-links-3 flex flex-row items-center m-4 gap-4 md:flex-col md:items-start'>
                        <h1 className='text-white text-lg font-bold'>Brands</h1>
                        <div className='flex flex-row flex-wrap gap-2 clamp-text-2 md:flex-col md:items-start'>
                            {Brands.map((brand) => (
                            <Link to='/' className = "footer-link">{brand}</Link>
                        ))}
                           {/*  <Link to='/' className = "footer-link">Ferrari</Link>
                            <Link to='/' className = "footer-link">Mercedes-Benz</Link>
                            <Link to='/' className = "footer-link">Porsche</Link>
                            <Link to='/' className = "footer-link">Hyundai</Link>
                            <Link to='/' className = "footer-link">Toyota</Link>
                            <Link to='/' className = "footer-link">Ford</Link>
                            <Link to='/' className = "footer-link">Subaru</Link>
                            <Link to='/' className = "footer-link">BMW</Link>
                            <Link to='/' className = "footer-link">Innova</Link> */}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-row justify-around items-center gap-3 md:flex-col md:justify-center md:items-center">
                    <Logo className = 'clamp-logo'/>
                    <div className='contact-us flex justify-center items-center'>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">FB</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1" >IG</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">Threads</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">X</Link>
                        <Link to='/' className = "ml-2 text-white font-light clamp-text-1">Reddit</Link>
                    </div>
                    <Copyright/>
                </div>
                
               
            </footer>
        </>
    );
}

export default Footer;