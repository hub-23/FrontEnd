import React, {useState} from 'react';
import styles from './foundcountry.module.css'
import AllCountry from "../AllCountry/AllCountry";
const FoundCountry = ({changeState}) => {

    const [enterCountry, setEnterCountry] = useState('')
    const [filteredCountries, setFilteredCountries] = useState([]);


    const inputChange = (e) => {
        const text = e.target.value;
        setEnterCountry(text);
    }




    return (
        <div className={styles.block}>
            <div className={styles.blocktitle}>
                <h1 className={styles.title}>Оберіть або введіть свою країну</h1>
                <img onClick={changeState}
                    className={styles.exit} src="/img/exit.svg" alt=""/>
            </div>
            <input value={enterCountry}
                onChange={inputChange}
                className={styles.input}
                type="text"
                placeholder= 'Введіть назву країни'
                />
            <AllCountry filterText={enterCountry}/>
        </div>
    );
};

export default FoundCountry;