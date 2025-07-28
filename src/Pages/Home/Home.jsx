import React from 'react';
import Navbar from '../../Component/Navbar';
import Banner from '../../Component/Bannar/Banner';
import Footer from '../../Component/Sheard/Footer/Footer';
import Featured from '../../Component/Featured/Featured';

const Home = () => {
    return (
        <div className='pt-2'>
            
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;