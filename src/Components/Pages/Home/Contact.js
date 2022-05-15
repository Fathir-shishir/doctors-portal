import React from 'react';
import bgImage from '../../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background : `url(${bgImage})`,
            backgroundSize : `cover`
        }} className='mt-20'>
            
            <div className='pt-10'>
                <h1 className='text-primary text-center text-xl font-bold'>Contact Us</h1>
                <h1 className='text-center text-3xl text-white'>Stay connected with us</h1>
            </div>
            <div className='text-center  py-5'>
            <input type="text" placeholder="Email Address" className="input w-full max-w-xs  d-block" />
            </div>
            <div className='text-center py-2'>
            <input type="text" placeholder="Subject" className="input w-full max-w-xs " />
            </div>
            <div className='text-center py-2 pb-10'>
            <textarea className="textarea  w-full max-w-xs" placeholder="Bio"></textarea>
            <div>
            <PrimaryButton></PrimaryButton>
            </div>
            </div>

        </section>
    );
};

export default Contact;