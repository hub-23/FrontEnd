import React, { useState } from 'react';
import "./Feedbacks.css"
import Teacher1 from "../../assets/top-teachers/image1.png"
import Teacher2 from "../../assets/top-teachers/image2.png"
import Teacher3 from "../../assets/top-teachers/image3.png"
import Teacher4 from "../../assets/top-teachers/image4.png"
import Teacher5 from "../../assets/top-teachers/image5.png"
import Teacher6 from "../../assets/top-teachers/image6.png"
import Teacher7 from "../../assets/top-teachers/image7.png"
import { FeedbackCard } from './ExtraComponents/FeedbackCard';
import LeftArrowActive from "../../assets/top-teachers/Arrow_left_active.png"
import LeftArrowDisabled from "../../assets/top-teachers/Arow_left_disabled.png"
import RightArrowActive from "../../assets/top-teachers/Arow_right_active.png"
import RightArrowDisabled from "../../assets/top-teachers/Arow_right_dissabled.png"



export const Feedback = () => {
    const feedbacks = {
        teachers: [
            {
                id: 1,
                name: "Вікторія К",
                stars: 5,
                image: Teacher1,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
            {
                id: 2,
                name: "Вікторія К",
                stars: 5,
                image: Teacher2,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
            {
                id: 3,
                name: "Вікторія К",
                stars: 5,
                image: Teacher3,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
            {
                id: 4,
                name: "Вікторія К",
                stars: 5,
                image: Teacher4,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
            {
                id: 5,
                name: "Вікторія К",
                stars: 5,
                image: Teacher5,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
            {
                id: 6,
                name: "Вікторія К",
                stars: 5,
                image: Teacher6,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
            {
                id: 7,
                name: "Вікторія К",
                stars: 5,
                image: Teacher7,
                commentator: "Тетяна Василенко",
                description: "Чудові викладачі. Брала уроки англійської у Тетяни Валеріївни  онлайн за рік вийшла з А2 рівня на В2.",
                date: "06.10.2023"
            },
        ]

    }
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const totalItems = feedbacks.teachers.length;  // Fix here

    const nextSlide = () => {
        if (currentIndex < totalItems - itemsToShow) {
            setCurrentIndex(currentIndex + itemsToShow);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsToShow);
        }
    };

    return (
        <>
            <div className="feedback_container">
                <h1 className="feedback_title">Ваші відгуки</h1>

                <div className="feedback_inner">
                    {feedbacks.teachers.slice(currentIndex, currentIndex + itemsToShow).map((teacher) => (
                        <div className="feedback" key={teacher.id}>
                            <FeedbackCard teacher={teacher} />
                        </div>
                    ))}
                </div>
                <div className="feedback_arrowButtons">
                    <img
                        src={currentIndex === 0 ? LeftArrowDisabled : LeftArrowActive}
                        alt='left arrow button'
                        className="feedback_arrowBtn"
                        onClick={() => prevSlide()}
                        disabled={currentIndex === 0}
                    />
                    <img
                        src={currentIndex >= totalItems - itemsToShow ? RightArrowDisabled : RightArrowActive}
                        alt='right arrow button'
                        onClick={() => nextSlide()}
                        className="feedback_arrowBtn"
                        disabled={currentIndex >= totalItems - itemsToShow}
                    />
                </div>
            </div>
        </>
    );
};