import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from '../Theme';

const YearCounter = ({ yearData }) => {
  const characters = '1234567890';
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  const numberAnimation = () => {
    let iterations = 0;
    let interval = null;

    clearInterval(interval);

    interval = setInterval(() => {
      ref.current.innerText = ref.current.innerText.split('').map((character, index) => {
        if (index < iterations) {
          return ref.current.dataset.value[index];
        } else {
          return characters[Math.floor(Math.random() * characters.length)];
        }
      }).join('');
      if (iterations >= ref.current.dataset.value.length) {
        clearInterval(interval);
      }
      iterations += 1 / 5;
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      const topPosition = ref.current.getBoundingClientRect().top;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (topPosition < scrollPosition) {
        setInView(true);
      } else {
        setInView(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      numberAnimation();
    }
  }, [inView]);

  return (
    <>
      <Typography
        ref={ref}
        data-value={yearData}
        variant="h1"
        style={{ fontWeight: '500' }}
      >
        {yearData}
      </Typography>
    </>
  );
};

export default YearCounter;