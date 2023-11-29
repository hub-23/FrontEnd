import {
    Button,
    Container,
    SeeMore,
    Title,
    TopLessons,
} from './PopularСlasses.styled';
import sprite from './sprite.svg';
import { dataTopLessons } from './backend_temp';
import { useEffect, useState } from 'react';

export const PopularСlasses = () => {
    const [data, setData] = useState([]);
    const [isSeeMore, setIsSeeMore] = useState(true);

    useEffect(() => {
        if (isSeeMore) {
            let res = [];
            for (let i = 0; i < 18; i += 1) {
                res.push(dataTopLessons[i]);
            }
            return setData(res);
        }

        setData(dataTopLessons);
    }, [isSeeMore]);

    const addSeeMore = () => {
        setIsSeeMore((prev) => !prev);
    };

    return (
        <Container>
            <Title>Популярні заняття</Title>

            <TopLessons>
                {data.map(({ id, nameLesson, numTeach }) => (
                    <li key={id}>
                        <h2>{nameLesson}</h2>

                        <div>
                            <p>{numTeach} викладач</p>

                            <Button
                                onClick={() => {
                                    console.log('click on Item lesson');
                                }}
                            >
                                <svg width="24px" height="24px">
                                    <use href={`${sprite}#icon-arrow`}></use>
                                </svg>
                            </Button>
                        </div>
                    </li>
                ))}
            </TopLessons>

            <SeeMore>
                {isSeeMore ? <p>Дивитися більше</p> : <p>Дивитися меньше</p>}

                <Button $isActive={isSeeMore} onClick={addSeeMore}>
                    <svg width="24px" height="24px">
                        <use href={`${sprite}#icon-arow_down`}></use>
                    </svg>
                </Button>
            </SeeMore>
        </Container>
    );
};
