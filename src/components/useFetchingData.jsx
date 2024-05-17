// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Make sure the path is correct

const useFetchingData = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  const handleSearch = (searchCriteria) => {
    const { make, model, year, fuelType, transmission } = searchCriteria;
    const filtered = cars.filter(car =>
      (!make || car.Make.toLowerCase().includes(make.toLowerCase())) &&
      (!model || car.Model.toLowerCase().includes(model.toLowerCase())) &&
      (!year || car.Year === parseInt(year)) &&
      (!fuelType || car['Fuel Type'].toLowerCase().includes(fuelType.toLowerCase())) &&
      (!transmission || car.Transmission.toLowerCase().includes(transmission.toLowerCase()))
    );
    setFilteredCars(filtered);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} /> {/* Pass handleSearch as a prop */}
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>{`${car.Make} ${car.Model} (${car.Year}) - ${car['Fuel Type']} - ${car.Transmission}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default useFetchingData;
