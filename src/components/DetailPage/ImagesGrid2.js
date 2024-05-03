import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Link } from 'react-router-dom';

import theme from '../Theme';

const ImagesGrid2 = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    
  return (
      <div className = 'bg-[#FFC188] max-w-full mt-20 mx-auto'>
          <section className ='pt-20 max-w-[90%] lg:max-w-[1440px] mx-auto'>
            <div className = 'rounded-lg overflow-x-scroll lg:overflow-x-hidden'>
              <div className ='flex flex-row gap-5 lg:grid lg:grid-rows-2 lg:grid-cols-[2fr_1fr] lg:mx-5' >
                <img className = 'lg:row-span-2 mt-5 rounded-lg'src={images[0]}></img>
                <img className = 'rounded-lg' src={images[1]}></img>
                <img className = 'lg:order-4 rounded-lg' src={images[2]}></img>
              </div>
            </div>
          <div className = 'flex flex-col items-start justify-start lg:mx-5'>
            <Typography  variant="h4" style={{ marginTop: "1rem", fontWeight: "500"}}>Title</Typography>
            <Typography variant='p' style={{textAlign: 'left'}}>Discover the fantastic luminosity of the wonderful automobile</Typography>
          </div>
        </section>
      </div>
      );
}
 
export default ImagesGrid2;