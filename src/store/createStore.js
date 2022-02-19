import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";

const rootReducer = combineReducers({ totos: todosReducer });

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
