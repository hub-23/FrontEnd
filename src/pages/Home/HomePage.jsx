import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';
import { PeopleTrust } from '../../components/PeopleTrust/PeopleTrust';
import { PopularСlasses } from '../../components/PopularСlasses/PopularСlasses';
import { FeedbackCarousel } from '../../components/FeedbackCarousel/FeedbackCarousel';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularСlasses />
      <TopTeachersCarousel />
      <FeedbackCarousel />
      <PeopleTrust />
    </>
  );
};
