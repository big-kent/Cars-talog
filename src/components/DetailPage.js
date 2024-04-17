import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Button from '@mui/material/Button';


import { Link } from 'react-router-dom';


import DotsStepper from './DotsStepper';
import ImagesGrid from './ImagesGrid';
import Specification from './Specification';
import theme from './Theme';
const DetailPage = () => {
  

    return ( 
        <main>
            <DotsStepper></DotsStepper>
            <div className ='content-wrapper flex flex-row- justify-center'>
                <div className ='content-container flex flex-col items-center text-center pb-10'>
                    <Typography theme={theme} variant='h1' align='center' marginTop={12} fontWeight={800}>TITLE 1</Typography>
                    <Typography theme={theme} variant = 'p' align='center'>Lorem ipsum pla pla pla</Typography>
                </div>
            </div> 
            <ImagesGrid theme={theme}></ImagesGrid>
            <Specification></Specification>
        </main>
     );
}
 
export default DetailPage;