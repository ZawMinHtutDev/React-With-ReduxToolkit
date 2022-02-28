import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { PostReducer } from "./reducers";

const rootReducer = combineReducers({
    Posts: PostReducer
});

const middleware = [thunk];

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middleware)
})