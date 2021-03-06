import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import InfoSection3 from '../components/InfoSection3';
import { 
    homeObjOne,
 } from '../components/InfoSection/Data';
import { 
    homeObjTwo,
 } from '../components/InfoSection2/Data';
import { 
    homeObjThree,
 } from '../components/InfoSection3/Data';
import Services from '../components/Services';
import Footer from '../components/Footer/Index';
import SocialSection from '../components/SocialSection';
import {
    socialObj,
} from '../components/SocialSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection2 {...homeObjTwo} />
        <Services />
        <InfoSection3 {...homeObjThree} />
        <SocialSection {...socialObj} />
        <Footer />
        </>
    );
};

export default Home;
