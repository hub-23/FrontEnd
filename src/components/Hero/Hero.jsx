import { HeroFilter } from '../HeroFilter/HeroFilter';
import { StyledContainer, StyledGardient, StyledSection, StyledTitle } from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <StyledSection className="section-hero">
        <StyledContainer>
          <div className="hero-content">
            <StyledTitle>
              ПРОСТІР
              <br /> ТАЛАНОВИТИХ
              <br /> ЛЮДЕЙ
            </StyledTitle>
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
        </StyledContainer>
        <StyledGardient></StyledGardient>
      </StyledSection>
    </>
  );
};
