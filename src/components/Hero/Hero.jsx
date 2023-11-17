import React from 'react';
import { HeroButton } from '../HeroButton/HeroButton';
import { HeroFilter } from '../HeroFilter/HeroFilter';
import {
  StyledButtContainer,
  StyledContainer,
  StyledGradient,
  StyledSection,
  StyledText,
  StyledTitle,
} from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <StyledSection className="section-hero">
        <StyledGradient>
          <StyledContainer>
            <div className="hero-content">
              <StyledTitle>
                ПРОСТІР
                <br />
                {' '}
ТАЛАНОВИТИХ
                <br />
                {' '}
ЛЮДЕЙ
              </StyledTitle>
              <StyledText>
                Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до команди
                вчителів та склади
                конкуренцію в своїй ніші
              </StyledText>
              <StyledButtContainer>
                <HeroButton size="big" color="blue">
                  Стати викладачем
                </HeroButton>
                <HeroButton size="big" color="crimson">
                  Стати учнем
                </HeroButton>
              </StyledButtContainer>
            </div>
            <HeroFilter />
          </StyledContainer>
        </StyledGradient>
      </StyledSection>
    </>
  );
};