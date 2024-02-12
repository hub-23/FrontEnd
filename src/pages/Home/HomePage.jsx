import React from 'react';
import { PopularСlasses } from '../../components/PopularСlasses/PopularСlasses';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';
import { PeopleTrust } from '../../components/PeopleTrust/PeopleTrust';
import { Statistics } from '../../components/Statistics/Statistics';
import OurTeachersCarousel from '../../components/OurTeachersCarousel';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';
import { Hero } from '../../components/Hero/Hero';

export const HomePage = () => {
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
