import {combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {catsReducer} from "../reducers/reducer";

export const rootReducer = combineReducers({
    cats: catsReducer,
});

export const store = legacy_createStore(rootReducer)