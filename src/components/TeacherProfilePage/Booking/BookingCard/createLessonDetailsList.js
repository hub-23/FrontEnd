import transformDate from '../transformDate';

const createLessonDetailsList = ( classData ) => {
    const { date, time, venue, subject, price } = classData;

    return [
            {
                title: 'Дата',
            value: transformDate( date ) ?? '' ?? '' },
            {
                title: 'Час',
            value: time ?? '' },
            {
                title: 'Місце',
            value: venue ?? '' },
            {
                title: 'Послуга',
            value: subject ?? '' },
            {
                title: 'Вартість',
            value: price ?? '' },
        ];
}


export default createLessonDetailsList;
