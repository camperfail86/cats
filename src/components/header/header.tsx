import React from 'react';

import s from './style.module.css'
import {HeaderItem} from "./header-item/header-item";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <HeaderItem to={'/'}>Все котики</HeaderItem>
                <HeaderItem to={'/like-cats'}>Любимые котики</HeaderItem>
            </div>
        </header>
    );
};

export default Header;