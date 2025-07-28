import React from 'react';
import Navbar from '../../Component/Navbar';
import Banner from '../../Component/Bannar/Banner';
import Footer from '../../Component/Sheard/Footer/Footer';
import Featured from '../../Component/Featured/Featured';
import Contact from '../../Component/Contact/Contact';

const Home = () => {
    return (
        <div className='pt-2'>
            <Banner></Banner>
            <Featured></Featured>
            <Contact></Contact>
        </div>
    );
};

export default Home;