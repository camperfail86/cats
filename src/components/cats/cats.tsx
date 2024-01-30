import React from 'react';
import {CatsType} from "../../App";
import {CatItem} from "./catItem/cat-item";
import s from './style.module.css'

type Props = {
    cats: CatsType[]
}

export const Cats = ({cats}: Props) => {
    console.log(cats)
    return (
        <div className={s.wrapper}>
            <ul className={s.catItems}>
            {cats.map((cat: CatsType) => {
                return <CatItem url={cat.url} key={cat.id}></CatItem>
            })}
            </ul>
            <span className={s.text}>... загружаем еще котиков ...</span>
        </div>
    );
};


