import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({selected}) => {
    const [services,setServices]=useState([])
    const [treatment,setTreatment]= useState(null)
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then (data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-xl text-center text-secondary'>Available Appoinment on : {format(selected, 'PP')} </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service =><Service
                    key={service._id}
                    service={service}
                    setTreatment ={setTreatment}
                    ></Service>)
                }
            </div>
          
            {treatment && <BookingModal setTreatment={setTreatment} date ={selected} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;