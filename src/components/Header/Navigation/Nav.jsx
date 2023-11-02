import React from 'react';
import styles from './nav.module.css'
const Nav = () => {
    return (
        <nav>
            <ul className={styles.list} >
                <li>Викладачі</li>
                <li>Про нас</li>
                <li>Відгуки</li>
            </ul>
        </nav>
    );
};

export default Nav;