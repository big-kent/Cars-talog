import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { Link } from 'react-router-dom';


import DotsStepper from './DotsStepper';
const DetailPage = () => {

    const clampText = {
        h1: 'clamp(2rem, 0.5915rem + 6.0094vw, 6rem)',
        h2: 'clamp(1.5rem, 0.4437rem + 4.5070vw, 4.5rem)',
        h3: 'clamp(1rem, 0.2958rem + 3.0047vw, 3rem)'
    }

    return ( 
        <main>
            <DotsStepper></DotsStepper>
            <div className='content-wrapper flex flex-row- justify-center'>
                <div className='content-container flex flex-col items-center text-center pb-10'>
                    <Typography variant='h1' align='center' marginTop={12} fontSize={clampText.h1}>TITLE 1</Typography>
                    <Typography variant = 'h3' align='center' fontSize={clampText.h3}>Lorem ipsum pla pla pla</Typography>
                </div>
            </div> 
            <div className = 'grid grid-rows-1 grid-cols-1 place-items-center lg:grid-rows-2 lg:grid-cols-2'>
                <section>lmao</section>
                <section>lmao1</section>
                <section>lmao2</section>
                <section>lmao3</section>
            </div>
        </main>
     );
}
 
export default DetailPage;