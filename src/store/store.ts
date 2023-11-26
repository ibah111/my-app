import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import addonReducer from "./reducers/addonsSlice";
const rootReducers = combineReducers({
  addonReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
