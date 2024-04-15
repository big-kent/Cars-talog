import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';



import { ReactComponent as BannerImmage } from '..//assets/images/Car Image.svg';

import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const DotsStepper = () => {

    const buttonProperties = {
        prevArrow:  <IconButton aria-label="chevron-left">
                       <ChevronLeftIcon className='ml-12 bg-white rounded-full' fontSize='large'/>
                    </IconButton>,
        nextArrow: 
                    <IconButton  aria-label="chevron-right">
                        <ChevronRightIcon className='mr-12 bg-white rounded-full' fontSize='large'/>
                    </IconButton>
    }

    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <>
            <div className = 'relative'> 
                <h1 className ='absolute z-10 font-black text-white right-1/4 bottom-1/4 clamp-h1'>車 name</h1>
                    <Slide {...buttonProperties} indicators={index => <div className="indicator"></div>} scale={1} duration='2000'>
                        <div className ="each-slide-effect">
                            <BannerImmage className ='max-carousel'/>
                        </div>
                        <div className ="each-slide-effect">
                                <BannerImmage  className ='max-carousel'/>
                            
                        </div>
                        <div className ="each-slide-effect">
                            
                                <BannerImmage  className ='max-carousel'/>
            
                        </div>
                        <div className ="each-slide-effect">
                        
                                <BannerImmage  className ='max-carousel'/>
                        </div>
                    </Slide> 
            </div>
            

        </>

        
    );
};


export default DotsStepper;