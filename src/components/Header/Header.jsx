import React from 'react';
import styles from './header.module.css'

import Logo from "./logo/Logo";
import Nav from "./Navigation/Nav";
import Button from "../button/button";
import Select from "./Select/Select";



const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Nav/>
            <Select/>
            <Button>Вхід</Button>

        </div>
    );
};

export default Header;