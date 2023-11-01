import React, {useState} from 'react';
import FoundCountry from "./FoundCountry/FoundCountry";

import styles from './selectCountry.module.css'


const SelectCountry = ({changeState}) => {

    return (
        <div className={styles.found_country}>
            <FoundCountry changeState={changeState}/>
            <hr className={styles.hr}/>
            <p className={styles.text}>
                Вибір країни допоможе відображати актуальну <br/>інформацію про викладачів або учнів поблизу
            </p>
        </div>
    );
};

export default SelectCountry;