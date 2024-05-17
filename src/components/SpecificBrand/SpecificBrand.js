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
      <Typography variant="h2" align="center" fontWeight={500} marginBottom={3}>
        {make}
      </Typography>
      <Typography variant="h5" align="center" fontWeight={300} marginBottom={3}>
        There are {filteredCars.length} of {make}. Select one from the list below.
      </Typography>
      <section className ="flex flex-col w-[90%] ml-8 mr-8 justify-center items-start">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className ="flex flex-col items-center cursor-pointer w-full"
            onClick={() => handleCarClick(car)}
          >
            <div className =" w-full h-20 hover:bg-gray-300 mb-3 border-b-black border-b border-solid">
              <Typography variant="h4">{car.Model}</Typography>
            </div>
          </div>
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
};

export default SpecificBrand;
