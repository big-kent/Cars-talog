import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';

const CarDictionaryAlpha = () => {
  // State to hold the selected letter and the list of cars
  const [selectedLetter, setSelectedLetter] = useState('');
  const [carList, setCarList] = useState([]);

  // String containing all alphabets
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Function to show cars corresponding to a selected letter
  const showCars = (letter) => {
    const sampleCarData = {
      'A': ['Audi', 'Acura', 'Alfa Romeo'],
      'B': ['BMW', 'Bentley', 'Bugatti'],
      // Add more letters and corresponding cars
      'C': ['Chevrolet', 'Cadillac', 'Chrysler'],
      'D': ['Dodge', 'Dacia', 'Daihatsu'],
      'E': ['Elfin', 'Eagle', 'Eicher'],
      'F': ['Ferrari', 'Fiat', 'Ford'],
      'G': ['GMC', 'Geely', 'Great Wall'],
      'H': ['Honda', 'Hyundai', 'Hummer'],
      'I': ['Isuzu', 'Infiniti', 'IVECO'],
      'J': ['Jaguar', 'Jeep', 'JMC'],
      'K': ['Kia', 'Koenigsegg', 'Kenworth'],
      'L': ['Lamborghini', 'Lexus', 'Land Rover'],
      'M': ['Mercedes-Benz', 'Mazda', 'Mitsubishi'],
      'N': ['Nissan', 'Noble', 'Navistar International'],
      'O': ['Opel', 'Oldsmobile', 'Oshkosh'],
      'P': ['Porsche', 'Peugeot', 'Pontiac'],
      'Q': ['Qoros', 'Qvale', 'Quantum'],
      'R': ['Rolls-Royce', 'Renault', 'Rover'],
      'S': ['Subaru', 'Suzuki', 'Saab'],
      'T': ['Toyota', 'Tesla', 'Tata'],
      'U': ['Ural', 'Ultima', 'Unimog'],
      'V': ['Volkswagen', 'Volvo', 'Vauxhall'],
      'W': ['Wuling', 'Wiesmann', 'Western Star'],
      'X': ['Xpeng', 'Xtreme', 'Xenatec'],
      'Y': ['Yugo', 'Yutong', 'Yamaha'],
      'Z': ['Zastava', 'Zenovo', 'Zenvo']
    };

    setSelectedLetter(letter); // Set the selected letter state
    setCarList(sampleCarData[letter]); // Set the list of cars for the selected letter
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* Header */}
        <Typography variant="h3" gutterBottom>
          Car Dictionary Alpha
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {/* Display all alphabets as buttons */}
        <div>
          {alphabet.split('').map((letter) => (
            <Button
              key={letter}
              variant="contained"
              onClick={() => showCars(letter)}
              style={{ margin: '5px' }}
            >
              {letter}
            </Button>
          ))}
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          {/* Display selected letter and cars starting with that letter */}
          {selectedLetter && `Cars starting with ${selectedLetter}:`}
        </Typography>
        <ul>
          {carList.map((car, index) => (
            <li key={index}>{car}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Cardictionaryalpha;