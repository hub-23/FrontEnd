import { StyledStar } from './Rating.styled';
import star from '../../../../assets/top-teachers/star.png';

const Star = () => {
  return (
    <>
      <StyledStar>
        <img src={ star } alt="star" className="star" />
      </StyledStar>
    </>
  );
};

export default Star;
