import {
  Button,
  Container,
  SeeMore,
  Title,
  TopLessons,
} from './PopularСlasses.styled';
import sprite from './sprite.svg';
import { dataTopLessons as data } from './backend_temp';

export const PopularСlasses = () => {
  return (
    <Container>
      <Title>Популярні заняття</Title>

      <TopLessons>
        {data.map(({ nameLesson, numTeach }) => (
          <li>
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
        <p>Дивитися більше</p>

        <Button
          onClick={() => {
            console.log('click on Дивитися більше');
          }}
        >
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-arow_down`}></use>
          </svg>
        </Button>
      </SeeMore>
    </Container>
  );
};
