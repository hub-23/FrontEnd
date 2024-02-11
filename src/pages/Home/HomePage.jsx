import React from 'react';
// import { Hero } from '../../components/Hero/Hero';
import { HeroHub } from '../../components/Hero/HeroHub';
import { PopularСlasses } from '../../components/PopularСlasses/PopularСlasses';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';
import { PeopleTrust } from '../../components/PeopleTrust/PeopleTrust';
import { Statistics } from '../../components/Statistics/Statistics';
import OurTeachersCarousel from '../../components/OurTeachersCarousel';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';

export const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroHub />
      <PopularСlasses />
      <TopTeachersCarousel />
      <PeopleTrust />
      <Statistics />
      <OurTeachersCarousel />
      <FeedbackCarousel />
    </>
  );
};
