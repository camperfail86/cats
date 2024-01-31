import {combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import {catsReducer} from "../reducers/catsReducer";
import {likeCatsReducer} from "../reducers/likeCatsReducer";

export const rootReducer = combineReducers({
    cats: catsReducer,
    likeCats: likeCatsReducer
});
let preloadedState;
let persistedString = localStorage.getItem('likesCats')
if (persistedString) {
    preloadedState = JSON.parse(persistedString)
}

export const store = legacy_createStore(rootReducer, preloadedState);
export type RootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    localStorage.setItem('likesCats', JSON.stringify(store.getState()))
})