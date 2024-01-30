import React, {useEffect, useState} from 'react';
import Header from "./components/header/header";
import './index.css'
import {Route, Routes} from "react-router-dom";
import {Cats} from "./components/cats/cats";
import {catsApi} from "./api/api";
import {useDispatch} from "react-redux";

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
              <Route path={'/'} element={<Cats cats={cats}/>}/>
              <Route path={'/like-cats'} element={<div>2</div>}/>
          </Routes>
      </>
  );
}

export default App;
