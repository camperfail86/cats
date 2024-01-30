import React, {useEffect, useState} from 'react';
import s from './style.module.css'
import {CatsType} from "../../../App";
import svg from './../../../assets/icons/heart-dflt.svg'
import heartImg from './../../../assets/icons/heart.svg'
import {useDispatch, useSelector} from "react-redux";
import {addCat, deleteCat} from "../../../reducers/likeCatsReducer";
import {RootStateType} from "../../../store/store";

type Props = {likes: boolean | undefined} & Partial<CatsType>

export const CatItem = ({url, id, likes}: Props) => {
    const [isShow, setIsShow] = useState(false)
    const [heart, setHeart] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (likes) {
            setHeart(true)
        }
    }, []);

    const onClickHeartRed = () => {
        dispatch(deleteCat(id))
    }

    const onClickHeartDefault = () => {
        dispatch(addCat(id, url))
    }

    return (
        <li onMouseLeave={()=>setIsShow(false)} onMouseEnter={()=>setIsShow(true)}
            className={s.catItem}>
            <img className={s.catImg} width={225} height={225} src={url}></img>
            {isShow &&
              <button className={s.button} onClick={()=>setHeart(!heart)}>
                  {heart
                      ? <img onClick={onClickHeartRed} className={s.catIcon} width={40} height={37} src={heartImg} alt="Heart"/>
                      : <img onClick={onClickHeartDefault} className={s.catIcon} width={40} height={37} src={svg} alt="Heart"/>
                  }

              </button>}
        </li>
    );
};
