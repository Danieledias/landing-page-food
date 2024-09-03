import React from 'react';
import Header from '../../components/Header';
import Home from '../Home';
import Menu from '../Menu';
import Testimonials from '../Testimonials';
import Footer from '../../components/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Home />
            <Menu />
            <Testimonials />
            <Footer />
        </>
    );
}

export default LandingPage;
