import React from 'react';
import { Hero } from '../../components/Hero/Hero';
import TopTeachersCarousel from '../../components/TopTeachersCarousel';
import { PopularСlasses } from '../../components/PopularСlasses/PopularСlasses';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularСlasses />
      <TopTeachersCarousel />
    </>
  );
};
