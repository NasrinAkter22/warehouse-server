import React from 'react';
import About from '../../About/About';
import Review from '../../Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Inventorys from '../HomeInventorys/HomeInventorys';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Inventorys />
            <About></About>
            <Review></Review>
            
            
            <Footer />
        </div>
    );
};

export default Home;