import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { Link } from 'react-router-dom';

import theme from './Theme';


const ImagesGrid = () => {

    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    
    return ( 
        <div className ='max-w-full bg-green-100'>
            <div className = 'grid grid-rows-4 grid-cols-1 place-items-start max-w-7xl mx-auto gap-y-5 mobile-grid-show lg:grid-rows-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-0 lg:place-items-center'>
                <section className ='pl-10 pr-10 pt-5'>
                    <Typography theme={theme} variant = 'h3' align='center' fontWeight={500}>TITLE 2</Typography>
                    <Typography theme={theme} variant = 'p' align='center'>4Runner delivers serious performance with an available i-FORCE MAX 2.4L turbocharged hybrid powertrain. Providing up to 326 net combined horsepower and 465 lb.-ft. of torque, 4Runner moves quicker than ever, while its 8-speed automatic transmission and 6,000-lb. max towing capacity * help you go harder than before.</Typography>
                </section>
                <section>
                    <img src={images[0]} className ='rounded-lg'></img>
                </section>
                <section className = 'order-4 lg:order-3'>
                    <img src={images[1]} className ='rounded-lg'></img>
                </section>
                <section className = 'pl-10 pr-10 order-3 lg:order-4'>
                    <Typography theme={theme} variant='h3' align='center' fontWeight={500}>TITLE 3</Typography>
                    <Typography theme={theme} variant = 'p' align='center'>Standard on TRD Pro and Trailhunter models, the new Stabilizer Disconnect Mechanism (SDM) helps you navigate across terrain with ease. * With the touch of a button, the stabilizer bar disengages to give the front suspension increased wheel articulation, helping to keep all four wheels in contact with the ground.</Typography>
                </section>
            </div>
        </div>
     );
}
 
export default ImagesGrid;