import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;