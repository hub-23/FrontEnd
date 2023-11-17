import React from 'react';
// import Country from "./Country/Country";
import Language from "./Language/Language";
import styles from './Select.module.css'
const Select = () => {
    return (
        <div className={styles.block}>
{/*             <Country/> */}
            <div><Language/></div>
        </div>
    );
};

export default Select;
