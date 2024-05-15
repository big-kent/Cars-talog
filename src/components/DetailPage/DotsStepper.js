import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import { ReactComponent as BannerImmage } from '../../images/Car Image.svg';

import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import theme from '../Theme';


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


    const { model } = useParams();


    return (
        <>
            <div className='relative'> 
                <Typography theme={theme} variant='h1' style={{ position: 'absolute', zIndex: '10', color:'white', bottom: '10rem', right: '5rem', align: 'center', marginTop: '2rem', fontFamily: 'Arvo', fontStyle: 'serif', textTransform: 'uppercase'}}>{model}</Typography>
                
                    <Slide {...buttonProperties} indicators={index => <div className ="indicator"></div>} scale={1} duration='2000'>
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