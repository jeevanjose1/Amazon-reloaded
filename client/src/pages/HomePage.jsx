import React from 'react';
import EntertainmentSection from '../components/homePageComponents/EntertainmentSection';
import Family from '../components/homePageComponents/Family';
import Feature from '../components/homePageComponents/Feature';
import HeroSection from '../components/homePageComponents/HeroSection';
import Membership from '../components/homePageComponents/Membership';
import ScrollTop from '../util/ScrollTop';
function HomePage() {
    return (
        <div>
            <HeroSection />
            <EntertainmentSection />
            <Membership />
            <Feature />
            <Family />
            <ScrollTop />
        </div>
    );
}

export default HomePage;
