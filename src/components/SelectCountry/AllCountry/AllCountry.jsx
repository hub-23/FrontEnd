import React, {useState} from 'react';
import styles from './allcountry.module.css'
const AllCountry = ({ filterText }) => {

    const [counties, setCountries] = useState([
        {name: 'Україна'},
        {name: 'Польща'},
        {name: 'Чехія'},
        {name: 'Франція'},
        {name: 'Швейцарія'},
        {name: 'Німеччина'},
        {name: 'Англія'},
        {name: 'Латвія'},
        {name: 'Литва'},
        {name: 'Швеція'},
        {name: 'Канада'},
        {name: 'США'},
        {name: 'Словакія'},
        {name: 'Угорщна'},
        {name: 'Австрія'},
    ])

    const filteredCountries = counties.filter((country) =>
        country.name.toLowerCase().includes(filterText.toLowerCase())
    )

    return (
        <ul className={styles.all_country}>
            {filteredCountries.map((country, id) => (
                <li key={id} className={styles.county_list}>
                    {country.name}
                </li>
            ))}

        </ul>
    );
};

export default AllCountry;