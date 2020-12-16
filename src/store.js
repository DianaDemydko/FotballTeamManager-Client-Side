import React from 'react';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Redusers/index";
import thunk from 'redux-thunk';

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;