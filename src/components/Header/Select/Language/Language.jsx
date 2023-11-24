import React from 'react';
import styles from './language.module.css';

const Language = () => {
//   const [ active, setActive ] = useState( true );
  return (
    <div className={ styles.language }>
      <p>UA</p>
      <div className={ styles.divider }></div>
      <p>EN</p>
    </div>
  );
};

export default Language;
