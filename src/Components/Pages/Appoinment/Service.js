import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name, slots}=service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-secondary">{name}</h2>
    <p> {
        slots.length>0 ? <span> {slots[0]}</span> : <span className='text-red-500'>Try Another Date</span>
    }</p>
    <p>{slots.length} Speces Available </p>
    <div class="card-actions justify-center">
      <label 
      for="bookingModal"
      onClick={()=>setTreatment(service)} 
       disabled={slots.length=== 0} 
       className="btn-secondary btn modal-button  text-white text-upperCase">Book Appoinment</label>
    </div>
  </div>
</div>
    );
};

export default Service;