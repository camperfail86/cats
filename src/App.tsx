import React, {useEffect, useState} from 'react';
import Header from "./components/header/header";
import './index.css'
import {Route, Routes} from "react-router-dom";
import {Cats} from "./components/cats/cats";
import {catsApi} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";

export type CatsType = {
    breads: any
    height: number
    id: string
    url: string
    width: number
}

const initialValue = {
    breads: [],
    height: 500,
    id: '12',
    url: 'sd',
    width: 400,
}

function App() {
    const [cats, setCats] = useState([initialValue])
    const catsLikes = useSelector((state: RootStateType) => state.likeCats)

    // const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(catsApi.getCats())
        catsApi.getCats().then((res: any)=> {
            setCats(res.data)
        })
    }, []);

  return (
      <>
          <Header/>
          <Routes>
              <Route path={'/'} element={<Cats mainPage={true} cats={cats}/>}/>
              <Route path={'/like-cats'} element={<Cats cats={catsLikes}/>}/>
          </Routes>
      </>
  );
}

export default App;
