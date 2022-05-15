import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
        <AppoinmentBanner selected={selected} setSelected={setSelected} ></AppoinmentBanner>
        <AvailableAppoinment selected={selected} setSelected={setSelected}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;