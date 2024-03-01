import React from 'react';
import { PopularСlasses } from '../components/HomePage/PopularСlasses/PopularСlasses';
import TopTeachersCarousel from '../components/HomePage/TopTeachersCarousel';
import { PeopleTrust } from '../components/HomePage/PeopleTrust/PeopleTrust';
import { Statistics } from '../components/HomePage/Statistics/Statistics';
import OurTeachersCarousel from '../components/HomePage/OurTeachersCarousel';
import { FeedbackCarousel } from '../components/HomePage/FeedbackCarousel/FeedbackCarousel';
import { Hero } from '../components/HomePage/Hero/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularСlasses />
      <TopTeachersCarousel />
      <PeopleTrust />
      <Statistics />
      <OurTeachersCarousel />
      <FeedbackCarousel />
    </>
  );
};

export default HomePage;
