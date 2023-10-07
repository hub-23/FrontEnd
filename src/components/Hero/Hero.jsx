// import React, { useState } from 'react';
import { HeroFilter } from '../HeroFilter/HeroFilter';

export const Hero = () => {
  return (
    <>
      <section className="section-hero">
        <div className="hero-content">
          <h1>ПРОСТІР ТАЛАНОВИТИХ ЛЮДЕЙ</h1>
          <p>
            Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до команди вчителів та склади
            конкуренцію в своїй ніші
          </p>
          <div className="button-container">
            <button className="primary-button">Стати викладачем</button>
            <button className="secondary-button">Стати учнем</button>
          </div>
        </div>
        <HeroFilter />
      </section>
    </>
  );
};
