// Pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdvancedSearchBar from "../components/AdvancedSeachBar"; // Ensure the path is correct
import Banner from "../components/Banner";
import ContactBanner from "../components/ContactBanner";
import HowItWorks from "../components/HowItWorks";
import PickCar from "../components/PickCar";
import WhyUs from "../components/WhyUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
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
    const { make, model, year, fuelType, transmission, vehicleClass } = searchCriteria;
    const filtered = cars.filter(car =>
      (!make || car.Make.toLowerCase().includes(make.toLowerCase())) &&
      (!model || car.Model.toLowerCase().includes(model.toLowerCase())) &&
      (!year || car.Year === parseInt(year)) &&
      (!fuelType || car['Fuel Type'].toLowerCase().includes(fuelType.toLowerCase())) &&
      (!transmission || car.Transmission.toLowerCase().includes(transmission.toLowerCase())) &&
      (!vehicleClass || car['Vehicle Class'].toLowerCase().includes(vehicleClass.toLowerCase()))
    );
    setFilteredCars(filtered);
  };

  return (
    <>
      <Banner />
      <AdvancedSearchBar onSearch={handleSearch} /> {/* Include AdvancedSearchBar */}
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>{`${car.Make} ${car.Model} (${car.Year}) - ${car['Fuel Type']} - ${car.Transmission} - ${car['Vehicle Class']}`}</li>
        ))}
      </ul>
      <HowItWorks />
      <PickCar />
      <ContactBanner />
      <WhyUs />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
