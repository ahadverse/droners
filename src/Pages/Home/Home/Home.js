import { Divider } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Company from '../Companies/Company';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Company></Company>
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Divider />
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;