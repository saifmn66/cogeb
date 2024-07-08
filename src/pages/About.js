import React from 'react';
import AboutHeader from '../components/AboutHeader';
import Carousel3 from '../components/Carousel3';
import StateCardAbout from '../components/StateCardAbout';
import Card1About from '../components/Card1About';
import Card2About from '../components/Card2About';
import Card3 from '../components/Card3';
import Newsetter from '../components/Newsetter';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <AboutHeader />
      <Carousel3 />
      <Card1About/>
      <StateCardAbout/>
      <Card2About/>
      <Card3/>
      <Newsetter/>
      <Footer/>
    </div>
  );
}
