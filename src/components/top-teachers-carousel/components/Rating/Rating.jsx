import { StyledRating } from './Rating.styled';
import star from '../../../../assets/top-teachers/star.png';
import Star from './Star';

const Rating = () => {
    return (
        <>
            <StyledRating>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </StyledRating>
        </>
    );
};

export default Rating;
