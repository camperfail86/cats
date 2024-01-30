import React from 'react';
import s from './style.module.css'
import {NavLink} from "react-router-dom";

type Props = {
    children: string
    to: string
}

export const HeaderItem = ({children, to}: Props) => {
    return (
        <NavLink to={to} className={({isActive}) =>
            (isActive ? s.active : s.headerItem)  }>
            {children}
        </NavLink>
    );
};
