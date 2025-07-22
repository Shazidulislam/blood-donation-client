import React from 'react';
import Navbar from '../../Component/Navbar';
import Banner from '../../Component/Bannar/Banner';
import Footer from '../../Component/Sheard/Footer/Footer';

const Home = () => {
    return (
        <div className='pt-2'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;