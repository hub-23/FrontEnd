import React from 'react';
// import { Hero } from '../../components/Hero/Hero';
import { PopularСlasses } from '../../components/PopularСlasses/PopularСlasses';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';
import { PeopleTrust } from '../../components/PeopleTrust/PeopleTrust';
import OurTeachersCarousel from '../../components/OurTeachersCarousel';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';
import { HeroHub } from '../../components/Hero/HeroHub';

export const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroHub />
      <PopularСlasses />
      <TopTeachersCarousel />
      <PeopleTrust />
      <OurTeachersCarousel />
      <FeedbackCarousel />
    </>
  );
};
