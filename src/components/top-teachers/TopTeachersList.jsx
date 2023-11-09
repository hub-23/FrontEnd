import React from 'react';
import TopTeachersItem from './TopTeachersItem';

const TopTeachersList = () => {
	return (
		<>
		{teachers.filter( (teacher, index ) => index < 9 )
		.map( (teacher, index ) => {
			return (
				<TopTeachersItem key = { teacher.id } teacher = { teacher } />
			)
		})}
		</>
	)
}

export default TopTeachersList;
