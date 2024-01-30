import React from 'react';
import {CatsType} from "../../App";
import {CatItem} from "./catItem/cat-item";
import s from './style.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";

type Props = {
    cats: CatsType[]
    mainPage?: boolean
    // likes?: boolean
}

export const Cats = ({cats, mainPage = false}: Props) => {
    const state = useSelector((state: RootStateType) => state.likeCats)
    console.log(state)
    return (
        <div className={s.wrapper}>
            <ul className={s.catItems}>
            {cats.map((cat: CatsType) => {
                let likes = false
                state.forEach((likeCat: any) => {
                    if (likeCat.id === cat.id){
                        likes = true
                    }
                })
                return <CatItem likes={likes} id={cat.id} url={cat.url} key={cat.id}></CatItem>
            })}
            </ul>
            {mainPage && <span className={s.text}>... загружаем еще котиков ...</span>}
        </div>
    );
};


