import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../Theme';
import useFetch from '../useFetch';
import Footer from '../Footer';

const SpecificBrand = () => {
  const { make } = useParams();
  const { data: carManufacturers, loading, error } = useFetch(`http://localhost:8000/cars`);
  const navigate = useNavigate();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    if (!loading && carManufacturers) {
      setFilteredCars(carManufacturers.filter((car) => car.Make === make));
    }
  }, [loading, carManufacturers, make]);


  const handleCarClick = (car) => {
    navigate(`/${make}/${car.Model}`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Typography variant="h3" align="center" fontWeight={500} marginBottom={3}>
        {make}
      </Typography>
      <Typography variant="body1" align="center" fontWeight={300} marginBottom={3}>
        These are the results of {make}. Select one from the list below.
      </Typography>
      <section className ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 max-w-[1024px] m-auto mb-10">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleCarClick(car)}
          >
            <div className="w-40 h-20 bg-gray-300 mb-3 hover:scale-125" />
            <Typography variant="body2">{car.Model}</Typography>
          </div>
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default SpecificBrand;
