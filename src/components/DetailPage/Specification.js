import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import theme from '../Theme';
import SpecList from './SpecList';
import { Link } from 'react-router-dom';

const Specification = () => {

    const images = [
    { id: 1, title: 'Dual permanently synchronous electric motors (300 kW total)', image: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
    { id: 2, title: 'Ipsum', image: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" },
    { id: 3, title: 'Lmamoasdoad', image: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
    ];

    const [specification, setSpecification] = useState(images[0]);

    const handleSpecification = (index) => {
        setSpecification(images[index]);
    };

    return ( 
        <div className = 'max-w-[1280px] mx-auto'>
            <div className ='grid grid-rows-[1fr_4fr] grid-cols-1 mt-20 mx-auto w-fit lg:grid-rows-1 lg:grid-cols-[1fr_3fr] items-center'>
                <aside className ='flex flex-col h-fit gap-5 px-10 lg:items-center'>
                    <Typography theme={theme} variant='h1' style={{ align: 'center', fontWeight: '400', fontFamily: 'Arvo', textTransform: 'uppercase'}}>Specs</Typography>
                    <ul className="flex flex-row  justify-around lg:flex-col gap-16">
                        <li className='cursor-pointer' onClick={() => handleSpecification(0)}>
                            <SpecList content='Spec 1'></SpecList>
                        </li>
                        <li className='cursor-pointer' onClick={() => handleSpecification(1)}>
                            <SpecList content='Weight'></SpecList>
                        </li>
                        <li className='cursor-pointer' onClick={() => handleSpecification(2)}>
                            <SpecList content='Horsepower'></SpecList>
                        </li>
                        <li className='cursor-pointer'>
                            <SpecList content='Spec 4'></SpecList>
                        </li>
                        <Link to='/signup' className = "ml-2 text-white font-light clamp-text-1">Sign Up</Link>
                    </ul>
                </aside>  
                <section className ='mx-10 mt-10 w-fit border-l-black lg:m-0 lg:flex lg:flex-col lg:items-center'>
                    <Typography theme={theme} variant='h6' align='center' fontWeight={500} marginBottom={3}>{specification.title}</Typography>
                    <img className=' max-w-full mx-auto rounded-lg lg:max-w-[90%] lg:m-0 object-fill' src={specification.image} alt="Product Specification"></img>
                </section>
            </div>
        </div>
     );
}
 
export default Specification;
