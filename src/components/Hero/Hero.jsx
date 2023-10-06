import React from 'react';

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
        <form className="filter">
          <input type="text" placeholder="Поиск по ключевому слову"></input>
          <input type="text" placeholder="Фильтр по категории"></input>
          <input type="checkbox"></input>
          <button className="filter-button">Найти</button>
        </form>
      </section>
    </>
  );
};
