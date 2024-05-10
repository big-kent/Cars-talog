import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import theme from '../Theme';
import SignIn from './SignIn';

const LogIn = () => {
    return ( 
            <section>
                <div className='max-w-full m-auto rounded-x grid grid-cols-[3fr_1fr]' >
                   <div className='relative'>
                        <img className='w-full h-full absolute' src="https://image.freepik.com/free-photo/cars-desert_157912-173.jpg"></img>
                        <div className = 'absolute mt-32 ml-60 w-[40%]'>
                            <Typography theme={theme} variant='h3' component='h3' style={{ paddingBottom: '2rem', fontWeight: 'bolder' }}>
                            Purchasing a car more effectively with Cars-talog
                            </Typography>
                            <Typography theme={theme} variant='p' component='p' style={{ paddingBottom: '2rem' }}>
                                Browsing every car in no time
                            </Typography>
                        </div>
                    </div>
                    <SignIn></SignIn>
                </div>
            </section>
     );
}
 
export default LogIn;