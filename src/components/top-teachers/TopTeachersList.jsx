import React from 'react';
import TopTeachersItem from './TopTeachersItem';

import { teachers } from './DataTopTeachers';

const TopTeachersList = () => {
    return (
        <>
            {teachers
                .filter((teacher, index) => index < 12)
                .map((teacher, index) => {
                    return (
                        <TopTeachersItem key={teacher.id} teacher={teacher} />
                    );
                })}
            <TopTeachersItem />
        </>
    );
};

export default TopTeachersList;
