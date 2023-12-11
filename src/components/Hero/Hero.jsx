import React from 'react';
import { Button } from '../common/button/Button';
import { HeroFilter } from '../HeroFilter/HeroFilter';
import {
  StyledSection,
  StyledGradient,
  StyledContainer,
  StyledBtnContainer1,
  StyledText,
  StyledTitle,
  ButtonTypography,

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
              <StyledBtnContainer1>
                <Button className='btn' variant='blue'>
                  <ButtonTypography>
                    Стати викладачем
                  </ButtonTypography>
                </Button>
                <Button className='btn' variant='pink'>
                  <ButtonTypography>
                    Стати учнем
                  </ButtonTypography>
                </Button>
              </StyledBtnContainer1>
            </div>
            <HeroFilter />
          </StyledContainer>
        </StyledGradient>
      </StyledSection>
    </>
  );
};
