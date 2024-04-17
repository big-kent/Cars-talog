import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import theme from './Theme';

const Specification = () => {

    const images = [
    { id: 1, title: 'Lorem', image: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
    { id: 2, title: 'Ipsum', image: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80" },
    { id: 3, title: 'Lmamoasdoad', image: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" },
    ];

    const [specification, setSpecification] = useState(images[0]);

    const handleSpecification = (index) => {
        setSpecification(images[index]);
    };

    return ( 
        <div className='flex flex-col mt-20'>
            <div className='flex flex-col gap-5 px-10'>
                <Typography theme={theme} variant='h1' align='center' fontWeight={500}>Specs</Typography>
                <Typography theme={theme} variant = 'p' align='center'>4Runner delivers serious performance with an available i-FORCE MAX 2.4L turbocharged hybrid powertrain. Providing up to 326 net combined horsepower and 465 lb.-ft. of torque, 4Runner moves quicker than ever, while its 8-speed automatic transmission and 6,000-lb. max towing capacity * help you go harder than before.</Typography>
                <ul className="flex flex-row justify-around">
                    <li onClick={() => handleSpecification(0)}>Spec 1</li>
                    <li onClick={() => handleSpecification(1)}>Spec 2</li>
                    <li onClick={() => handleSpecification(2)}>Spec 3</li>
                    <li>Spec 4</li>
                </ul>
            </div>  
            <section className='mx-10 mt-10'>
                <Typography theme={theme} variant='h3' align='center' fontWeight={500} marginBottom={3}>{specification.title}</Typography>
                <img className='max-w-full' src={specification.image} alt="Product Specification"></img>
            </section>
        </div>
     );
}
 
export default Specification;
