import { configureStore } from "@reduxjs/toolkit";
import seedDetailReducer from './features/seedDetailSlice';
import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    seedDetailReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    // reducer: reducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
