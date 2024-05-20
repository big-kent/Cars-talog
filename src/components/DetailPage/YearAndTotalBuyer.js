import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import YearCounter from './YearCounter';
import useFetch from '../useFetch';
import { useParams } from 'react-router-dom';

const YearAndTotalBuyer = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  const { data: carManufacturers, loading, error } = useFetch(`http://localhost:8000/cars`);
  const { model } = useParams();
  const [filteredModels, setFilteredModels] = useState([]);

  useEffect(() => {
    if (!loading && carManufacturers) {
      const filtered = carManufacturers.filter((car) => car.Model === model);
      setFilteredModels(filtered);
    }
  }, [loading, carManufacturers, model]);

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
        <YearCounter yearData={filteredModels.length ? filteredModels[0].Year : 2005}></YearCounter>
      </div>
      <div></div>
      <div className="border-solid border-r-black border-r-2"></div>
      <div className="flex flex-col justify-center items-center order-4">
        <YearCounter yearData={4000000}></YearCounter>
        <Typography
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
