import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../Appointment/AppointmentBanner';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import DentalCare from '../DentalCare/DentalCare';
import Information from '../Information/Information';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;