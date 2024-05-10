import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import YearCounter from './YearCounter';
import theme from '../Theme';

const YearAndTotalBuyer = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      className="lg:grid lg:grid-cols-2 lg:grid-rows-2 mt-52 mb-52"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <div className="flex flex-col justify-center items-center border-solid border-r-black border-r-2">
        <Typography
          theme={theme}
          variant="h6"
          style={{
            align: 'center',
            marginTop: '2rem',
            fontFamily: 'Arvo',
            fontStyle: 'serif',
            textTransform: 'uppercase',
          }}
        >
          production year
        </Typography>
        <YearCounter yearData={2005}></YearCounter>
      </div>
      <div></div>
      <div className="border-solid border-r-black border-r-2"></div>
      <div className="flex flex-col justify-center items-center order-4">
        <YearCounter yearData={4000000}></YearCounter>
        <Typography
          theme={theme}
          variant="h6"
          style={{
            align: 'center',
            fontFamily: 'Arvo',
            fontStyle: 'serif',
            textTransform: 'uppercase',
          }}
        >
          total customers
        </Typography>
      </div>
    </section>
  );
}

export default YearAndTotalBuyer;