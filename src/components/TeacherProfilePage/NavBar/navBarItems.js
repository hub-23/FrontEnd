import React from 'react';
import { ReactComponent as ProfileIcon } from '../../../assets/student/profile.svg';

const navBarItems =[
    {
        title: 'Особиста інформація',
        path: 'profile',
        icon: <ProfileIcon/>
    },
    {
        title: 'Мої бронювання',
        path: 'booking',
        icon: <ProfileIcon/>
    },
    {
        title: 'Календар',
        path: 'calendar',
        icon: <ProfileIcon/>
    },
    {
        title: 'Відгуки',
        path: 'responses',
        icon: <ProfileIcon/>
    },
    {
        title: 'Тарифи',
        path: 'tarrifs',
        icon: <ProfileIcon/>
    },
    
    {
        title: 'Вийти',
        path: '/',
        icon: <ProfileIcon/>
    }, /** ?? */
]

export default navBarItems;
