// components/AdvancedSearchBar.jsx
import React, { useState } from 'react';

const AdvancedSearchBar = ({ onSearch }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [vehicleClass, setVehicleClass] = useState(''); // New state for vehicle class

  const handleSearch = () => {
    onSearch({ make, model, year, fuelType, transmission, vehicleClass }); // Include vehicle class in search criteria
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Fuel Type"
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
      />
      <input
        type="text"
        placeholder="Transmission"
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
      />
      <input
        type="text"
        placeholder="Vehicle Class"
        value={vehicleClass}
        onChange={(e) => setVehicleClass(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AdvancedSearchBar;
