import React from 'react';
import TopTeachersList from './TopTeachersList';
import { TopTeachersButton } from './components/button/TopTeachersButton';

import {
    StyledSection,
    StyledContainer,
    StyledTitle,
    StyledCarousel,
    StyledBtnContainer,
    Flex,
} from './TopTeachers.styled.js';

const TopTeachers = () => {
    return (
        <>
            <StyledSection className="teachers-block">
                <Flex direction="column" align="stretch">
                    <StyledContainer>
                        <Flex>
                            <StyledTitle> Топові викладачі </StyledTitle>
                            <StyledBtnContainer>
                                <TopTeachersButton />
                                <div>Pause</div>
                            </StyledBtnContainer>
                        </Flex>
                    </StyledContainer>
                    <StyledCarousel>
                        <TopTeachersList />
                    </StyledCarousel>
                </Flex>
            </StyledSection>
        </>
    );
};

export default TopTeachers;
