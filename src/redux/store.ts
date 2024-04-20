import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalSlice from './reducer/modal.ts'

const rootReducer = combineReducers({
    modal: modalSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;