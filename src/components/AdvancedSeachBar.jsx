import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdvancedSearchBar.css'; // Ensure the path is correct

const AdvancedSearchBar = ({ onSearch }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [cylinders, setCylinders] = useState('');
  const [vehicleClass, setVehicleClass] = useState('');
  const [drive, setDrive] = useState('');
  const [carBrands, setCarBrands] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [cylinderTypes, setCylinderTypes] = useState([]);
  const [vehicleClasses, setVehicleClasses] = useState([]);
  const [driveTypes, setDriveTypes] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

  useEffect(() => {
    // Fetch car data from the API
    axios.get('http://localhost:8000/cars')
      .then(response => {
        const cars = response.data;

        // Extract unique values for each filter
        const brands = [...new Set(cars.map(car => car.Make))];
        const models = [...new Set(cars.map(car => car.Model))];
        const cylinders = [...new Set(cars.map(car => car.Cylinders))];
        const classes = [...new Set(cars.map(car => car['Vehicle Class']))];
        const drives = [...new Set(cars.map(car => car.Drive))];

        setCarBrands(brands);
        setCarModels(models);
        setCylinderTypes(cylinders);
        setVehicleClasses(classes);
        setDriveTypes(drives);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
      });
  }, []);

  useEffect(() => {
    // Filter models based on the selected brand
    if (make) {
      setFilteredModels(carModels.filter(model => {
        const car = car.find(car => car.Make === make && car.Model === model);
        return car !== undefined;
      }));
    } else {
      setFilteredModels(carModels);
    }
  }, [make, carModels]);

  const handleSearch = () => {
    onSearch({ make, model, cylinders, vehicleClass, drive });
  };

  const handleMakeChange = (e) => {
    const value = e.target.value;
    setMake(value);

    // Filter models based on the selected brand
    if (value) {
      setFilteredModels(carModels.filter(model => {
        const car = car.find(car => car.Make === value && car.Model === model);
        return car !== undefined;
      }));
    } else {
      setFilteredModels(carModels);
    }
  };

  return (
    <div className="advanced-search-bar">
      <div className="search-group">
        <label htmlFor="make">Select Brand (Make)</label>
        <select id="make" value={make} onChange={(e) => setMake(e.target.value)}>
          <option value="">Select Make</option>
          {carBrands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
      </div>
      <div className="search-group">
        <label htmlFor="model">Select Model</label>
        <select id="model" value={model} onChange={(e) => setModel(e.target.value)}>
          <option value="">Select Model</option>
          {filteredModels.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
      </div>
      <div className="search-group">
        <label htmlFor="cylinders">Cylinders Type</label>
        <select id="cylinders" value={cylinders} onChange={(e) => setCylinders(e.target.value)}>
          <option value="">Select Cylinders</option>
          {cylinderTypes.map((cylinder, index) => (
            <option key={index} value={cylinder}>{cylinder}</option>
          ))}
        </select>
      </div>
      <div className="search-group">
        <label htmlFor="vehicleClass">Class</label>
        <select id="vehicleClass" value={vehicleClass} onChange={(e) => setVehicleClass(e.target.value)}>
          <option value="">Select Class</option>
          {vehicleClasses.map((vehicleClass, index) => (
            <option key={index} value={vehicleClass}>{vehicleClass}</option>
          ))}
        </select>
      </div>
      <div className="search-group">
        <label htmlFor="drive">Type Drive (Drive)</label>
        <select id="drive" value={drive} onChange={(e) => setDrive(e.target.value)}>
          <option value="">Select Drive</option>
          {driveTypes.map((drive, index) => (
            <option key={index} value={drive}>{drive}</option>
          ))}
        </select>
      </div>
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default AdvancedSearchBar;
