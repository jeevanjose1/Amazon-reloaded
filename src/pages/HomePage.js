import React from 'react';
import EntertainmentSection from '../components/homePageComponents/EntertainmentSection';
import Family from '../components/homePageComponents/Family';
import Feature from '../components/homePageComponents/Feature';
import HeroSection from '../components/homePageComponents/HeroSection';
import Membership from '../components/homePageComponents/Membership';

function HomePage() {
    return (
        <div>
            <HeroSection />
            <EntertainmentSection />
            <Membership />
            <Feature />
            <Family/>
        </div>
    );
}

export default HomePage;
