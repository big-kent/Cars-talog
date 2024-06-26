import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';


import { Link } from 'react-router-dom';

import theme from '../Theme';


const ImagesGrid = () => {

    const { model } = useParams();

    const images = [
        "https://th.bing.com/th/id/OIP.EKF3a6KEsyMCuyNKhRdI9QAAAA?rs=1&pid=ImgDetMain",
        "https://res.cloudinary.com/caradvice/image/private/q_auto/v1574881502/jjw3bj62mnspvfpmobfd.jpg",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    
    return ( 
        <div className ='max-w-full bg-green-100'>
            <div className = 'grid grid-rows-4 grid-cols-1 place-items-start max-w-7xl mx-auto gap-y-5 mobile-grid-show lg:grid-rows-2 lg:grid-cols-2 lg:gap-y-10 lg:gap-x-0 lg:place-items-center'>
                <section className ='pl-10 pr-10 pt-5'>
                    <Typography theme={theme} variant='h3' style={{textAlign: 'left', fontWeight: 500}}>Exceptional Performance</Typography>
                    <Typography theme={theme} variant = 'p' align='center'>{model} delivers serious performance with an available i-FORCE MAX 2.4L turbocharged hybrid powertrain. Providing up to 326 net combined horsepower and 465 lb.-ft. of torque, {model} moves quicker than ever, while its 8-speed automatic transmission and 6,000-lb. max towing capacity * help you go harder than before.</Typography>
                </section>
                <section>
                    <img src={images[0]} className ='rounded-lg object-contain'></img>
                </section>
                <section className = 'order-4 lg:order-3'>
                    <img src={images[1]} className ='rounded-lg object-contain'></img>
                </section>
                <section className = 'pl-10 pr-10 order-3 object-contain lg:order-4 lg:place-items-end'>
                    <Typography theme={theme} variant='h3' style={{ textAlign: 'left', fontWeight: 500 }}>Stable Ride</Typography>
                    <Typography theme={theme} variant = 'p' style={{textAlign: 'right'}}>Standard on TRD Pro and Trailhunter models, the new Stabilizer Disconnect Mechanism (SDM) helps you navigate across terrain with ease. * With the touch of a button, the stabilizer bar disengages to give the front suspension increased wheel articulation, helping to keep all four wheels in contact with the ground.</Typography>
                </section>
            </div>
        </div>
     );
}
 
export default ImagesGrid;