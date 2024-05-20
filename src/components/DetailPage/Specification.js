import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import theme from '../Theme';
import SpecList from './SpecList';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const Specification = () => {

    const { model } = useParams();

    const { data: carManufacturers, loading, error } = useFetch(`http://localhost:8000/cars`);

    const [filteredModels, setFilteredModels] = useState([]);

    useEffect(() => {
    if (!loading && carManufacturers) {
      const filtered = carManufacturers.filter((car) => car.Model === model);
        setFilteredModels(filtered);
        
    }
    }, [loading, carManufacturers, model]);
    
    console.log(filteredModels)

    const images = [
    { id: 1, title: 'Annual Fuel Cost', image: filteredModels.length ? filteredModels[0]["Annual Fuel Cost"] : 0},
        { id: 2, title: 'Cylinder', image: filteredModels.length ? filteredModels[0].Cylinders : 0 },
    { id: 3, title: 'Drive', image: filteredModels.length ? filteredModels[0].Drive: 0  },
    {id: 4, title: 'Fuel Type', image: filteredModels.length ? filteredModels[0]["Fuel Type"]: 0 }
    ];

    const [specification, setSpecification] = useState(images[0]);

    

    const handleSpecification = (index) => {
        setSpecification(images[index]);
    };

    return ( 
        <div className = 'max-w-[1280px] mx-auto'>
            <div className ='grid grid-rows-[1fr_4fr] grid-cols-1 mt-20 mx-auto w-fit lg:grid-rows-1 lg:grid-cols-[1fr_3fr] items-center justify-center'>
                <aside className ='flex flex-col h-fit gap-5 px-10 lg:items-center'>
                    <Typography theme={theme} variant='h1' style={{ align: 'center', fontWeight: '400', fontFamily: 'Arvo', textTransform: 'uppercase'}}>Specs</Typography>
                    <ul className="flex flex-row  justify-around lg:flex-col gap-16">
                        <li className='cursor-pointer' onClick={() => handleSpecification(0)}>
                            <SpecList content='Annual Fuel Cost'></SpecList>
                        </li>
                        <li className='cursor-pointer' onClick={() => handleSpecification(1)}>
                            <SpecList content='Cylinder '></SpecList>
                        </li>
                        <li className='cursor-pointer' onClick={() => handleSpecification(2)}>
                            <SpecList content='Drive'></SpecList>
                        </li>
                        <li className='cursor-pointer' onClick={() => handleSpecification(3)}>
                            <SpecList content='Fuel Type'></SpecList>
                        </li>
                    </ul>
                </aside>  
                <section className ='mx-10 mt-10 w-full border-l-black lg:m-0 lg:flex lg:flex-col lg:items-center'>
                    <Typography theme={theme} variant='h4' align='center' fontWeight={500} marginBottom={3}>{specification.title}</Typography>
                    <div className=' max-w-full mx-auto rounded-lg lg:max-w-[90%] lg:m-0 object-fill'>
                        <Typography theme={theme} variant="h1" align="center">{specification.image}</Typography>
                    </div>
                </section>
            </div>
        </div>
     );
}
 
export default Specification;
