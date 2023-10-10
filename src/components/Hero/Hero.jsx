import { HeroButton, StyledButton } from '../HeroButton/HeroButton';
import { HeroFilter } from '../HeroFilter/HeroFilter';
import {
  StyledButtContainer,
  StyledContainer,
  StyledGardient,
  StyledSection,
  StyledText,
  StyledTitle,
} from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <StyledSection className="section-hero">
        <StyledGardient>
          <StyledContainer>
            <div className="hero-content">
              <StyledTitle>
                ПРОСТІР
                <br /> ТАЛАНОВИТИХ
                <br /> ЛЮДЕЙ
              </StyledTitle>
              <StyledText>
                Обирай свого викладача і прямуй до результату разом з нами або доєднуйся до команди вчителів та склади
                конкуренцію в своїй ніші
              </StyledText>
              <StyledButtContainer>
                <HeroButton size="big">Стати викладачем</HeroButton>
                <HeroButton size="big" color="second">
                  Стати учнем
                </HeroButton>
              </StyledButtContainer>
            </div>
            <HeroFilter />
          </StyledContainer>
        </StyledGardient>
      </StyledSection>
    </>
  );
};
