import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../Theme';

const LogosPage = () => {
  const [carManufacturers, setCarManufacturers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/cars`)
     .then(response => response.json())
     .then(carManufacturers => {
        setCarManufacturers(carManufacturers);
        setLoading(false);
      })
     .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Typography theme={theme} variant='h1' align='center' style={{position: 'absolute', fontWeight: '500', top: '50%', left:'50%', transform: 'translate(-50%, -50%)'}}>Loading...</Typography>
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!carManufacturers) {
    return null; // or a default message
  }

  const uniqueManufacturers = [...new Set(carManufacturers.map(m => m.Make))].map(name => {
    return carManufacturers.find(m => m.Make === name);
  });

  return (
    <div>
      <Typography theme={theme} variant='h1' align='center' fontWeight={500} marginBottom={3}>Browse car collection</Typography>
      <section className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 max-w-[1024px] m-auto">
      {uniqueManufacturers.map((manufacturer, index) => (
        <div key={index} className ="flex flex-col items-center">
          <div className ="w-48 h-24 bg-gray-300 mb-2" />
          <p className ="text-center">{manufacturer.Make}</p>
        </div>
      ))}
    </section>
    </div>
  );
};

export default LogosPage;