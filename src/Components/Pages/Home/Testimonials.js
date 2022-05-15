import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import peopleOne from '../../../assets/images/people1.png'
import peopleTwo from '../../../assets/images/people2.png'
import peopleThree from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id:1,
             name : "Winson Herry",
             review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
             location:"califonia",
             img:peopleOne
        },
        {
            _id:2,
             name : "Winson Herry",
             review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
             location:"califonia",
             img:peopleTwo
        },
        {
            _id:3,
             name : "Winson Herry",
             review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
             location:"califonia",
             img:peopleThree
        }
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                <h1>Testimonial</h1>
                <h1>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='lg:w-48 sm:w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2'>
                {
                    reviews.map(review=><Review 
                    key ={review._id}
                    review ={review}
                    ></Review>)  
                }
            </div>
        </section>
    );
};

export default Testimonials;