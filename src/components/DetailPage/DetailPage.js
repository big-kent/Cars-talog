import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Button from '@mui/material/Button';


import { Link, useParams } from 'react-router-dom';


import DotsStepper from './DotsStepper';
import ImagesGrid from './ImagesGrid';
import ImagesGrid2 from './ImagesGrid2';
import Specification from './Specification';
import theme from '../Theme';
import ChooseColor from './ChooseColor';
import YearAndTotalBuyer from './YearAndTotalBuyer';
import Footer from '../Footer';

const DetailPage = () => {

    const { model } = useParams();
  

    return ( 
        <main>
            <DotsStepper></DotsStepper>
            <div className ='content-wrapper flex flex-row- justify-center'>
                <div className ='content-container flex flex-col items-center text-center pb-10'>
                    <Typography theme={theme} variant='h1' style={{ align: 'center', marginTop: '2rem', fontFamily: 'Arvo', fontStyle: 'serif', textTransform: 'uppercase' }}>comfortable experience</Typography>
                    <Typography theme={theme} variant="p">Lorem ipsum harmony visibility Anna mechanic travelling </Typography>
                </div>
            </div> 
            <YearAndTotalBuyer></YearAndTotalBuyer>
            <ImagesGrid theme={theme}></ImagesGrid>
            <Specification></Specification> 
            <ImagesGrid2></ImagesGrid2>
            <ChooseColor></ChooseColor>
            <Footer></Footer>
        </main>
     );
}
 
export default DetailPage;