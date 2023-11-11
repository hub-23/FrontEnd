import React from 'react';
import {
    StyledContainer,
    StaledImage,
    StyledInfo,
} from './TopTeachers.styled.js';
import Ratenig from './components/ratening/Ratenig.jsx';

const TopTeachersItem = ({ teacher }) => {
    return (
        <>
            <StyledContainer>
                <Flex>
                    <StyledImage>{teacher.image}</StyledImage>
                    <StyledInfo>
                        <Flex>
                            <Ratenig />
                            <div className="location">{teacher.location}</div>
                        </Flex>
                        <Flex>
                            <div className="name">{teacher.name}</div>
                            <div className="subject">{teacher.subject}</div>
                        </Flex>
                    </StyledInfo>
                </Flex>
            </StyledContainer>
        </>
    );
};

export default TopTeachersItem;
