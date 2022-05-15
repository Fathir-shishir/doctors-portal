import React from 'react';
import fluride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services =[
        {
            _id : 1,
            name :"Fluoride Treatment",
            description :"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image : fluride
        },
        {
            _id : 2,
            name :"Cavity Fillingt",
            description :"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image : cavity
        },
        {
            _id : 3,
            name :"Teeth Whitening",
            description :"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image : Whitening
        }
    ]
    return (
        <div className='my-20'>
           <div className='text-center'>
                <h1 className='text-primary text-xl uppercase font-bold '>Our Services</h1>
                <h1 className='text-4xl uppercase'>Services We Provide</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service =><Service
                        key = {service._id}
                        service ={service}
                        ></Service>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;