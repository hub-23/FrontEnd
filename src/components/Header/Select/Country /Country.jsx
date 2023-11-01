import React from 'react';
import styles from './country.module.css'
import {useState} from "react";
import SelectCountry from "../../../SelectCountry/SelectCountry";

const Country = () => {
   const [openSelectCountry, setOpenSelectCountry] = useState(false)

    const handleSelectCountryClick = (e) => {
        e.stopPropagation();
    };

   function changeState(){
       setOpenSelectCountry(!openSelectCountry)
   }

    return (
        <button onClick={changeState}
            className={styles.country}>
            <p>Україна</p>
            <img src="/img/vector.svg"
                 alt=""
                 className={openSelectCountry ? styles.country_hover : styles.country}
            />
            {openSelectCountry && (
                <div onClick={handleSelectCountryClick}>
                    <SelectCountry changeState = {changeState}/>
                </div>
            )}
        </button>
    )
};

export default Country;