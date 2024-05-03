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
            <section className = ''>
                <div className ='max-w-full bg-[#C14023] m-auto rounded-x grid grid-cols-[3fr_1fr] '>
                    <div className ='flex flex-col w-fit p-10'>
                        <Typography theme={theme} variant='h3' component='h3' style={{paddingBottom: '2rem', color: 'white', fontWeight: 'bolder' }}>Purchasing a car more effectively with Cars-talog</Typography>
                        <Typography theme={theme} variant='p' component='p' style={{paddintBottom: '2rem', color: 'white'}}>Browsing every car in no time</Typography>
                    </div>
                    <SignIn></SignIn>
                </div>
            </section>
        </>
     );
}
 
export default LogIn;