import React, {useState} from 'react';
import s from './style.module.css'
import {CatsType} from "../../../App";
import svg from './../../../assets/icons/heart-dflt.svg'
import heartImg from './../../../assets/icons/heart.svg'

type Props = Partial<CatsType>

export const CatItem = ({url}: Props) => {
    const [isShow, setIsShow] = useState(false)
    const [heart, setHeart] = useState(false)

    return (
        <li onMouseLeave={()=>setIsShow(false)} onMouseEnter={()=>setIsShow(true)}
            className={s.catItem}>
            <img className={s.catImg} width={225} height={225} src={url}></img>
            {isShow &&
              <button className={s.button} onClick={()=>setHeart(!heart)}>
                  {heart
                      ? <img className={s.catIcon} width={40} height={37} src={heartImg} alt="Heart"/>
                      : <img className={s.catIcon} width={40} height={37} src={svg} alt="Heart"/>
                  }

              </button>}
        </li>
    );
};
