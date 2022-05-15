import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import BannerTwo from './BannerTwo';
import Contact from './Contact';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <BannerTwo></BannerTwo>
        <MakeAppoinment></MakeAppoinment>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;