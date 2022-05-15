import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit earum, voluptatum vel ea et harum.</p>
    <div className='flex items-center' >
    <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-2">
    <img src={review.img} alt="" />
  </div>
        </div>
        <div>
            <h1 className='text-xl'>{review.name}</h1>
            <h1>{review.location}</h1>
        </div>
    </div>
  </div>
</div>
    );
};

export default Review;