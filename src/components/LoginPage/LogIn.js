import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import theme from '../Theme';
import { Grid } from '@mui/material';
import SignIn from './SignIn';

const LogIn = () => {
    return ( 
        <>
            <section>
                <div className='max-w-full m-auto rounded-x grid grid-cols-[3fr_1fr]' >
                    <div className ='object-contain'>
                        <img src="https://image.freepik.com/free-photo/cars-desert_157912-173.jpg" style={{width: '100%', height: '100%'}}></img>
                        {/* <Typography theme={theme} variant='h3' component='h3' style={{ paddingBottom: '2rem', color: 'white', fontWeight: 'bolder' }}>
                            Purchasing a car more effectively with Cars-talog
                        </Typography>
                        <Typography theme={theme} variant='p' component='p' style={{ paddingBottom: '2rem', color: 'white' }}>
                            Browsing every car in no time
                        </Typography> */}
                    </div>
                    <SignIn></SignIn>
                </div>
            </section>
        </>
     );
}
 
export default LogIn;