import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Button from '@mui/material/Button';


import { Link } from 'react-router-dom';


import DotsStepper from '../DetailPage/DotsStepper';
import ImagesGrid from '../DetailPage/ImagesGrid';
import ImagesGrid2 from '../DetailPage/ImagesGrid2';
import Specification from '../DetailPage/Specification';
import theme from '../Theme';
import ChooseColor from '../DetailPage/ChooseColor';
import YearAndTotalBuyer from './YearAndTotalBuyer';

const DetailPage = () => {
  

    return ( 
        <main>
            <DotsStepper></DotsStepper>
            <div className ='content-wrapper flex flex-row- justify-center'>
                <div className ='content-container flex flex-col items-center text-center pb-10'>
                    <Typography theme={theme} variant='h1' style={{ align: 'center', marginTop: '2rem', fontFamily: 'Arvo', fontStyle: 'serif', textTransform: 'uppercase' }}>title 1</Typography>
                    <Typography theme={theme} variant="p">Lorem ipsum harmony visibility Anna mechanic travelling </Typography>
                </div>
            </div> 
            <YearAndTotalBuyer></YearAndTotalBuyer>
            <ImagesGrid theme={theme}></ImagesGrid>
            <Specification></Specification> 
            <ImagesGrid2></ImagesGrid2>
            <ChooseColor></ChooseColor>
        </main>
     );
}
 
export default DetailPage;