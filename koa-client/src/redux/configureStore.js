import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import combineStores from './modules';
import logger from 'redux-logger';

// 원래 함수 실행을 변수로 바꿔서 진행함
const CreatedStore = configureStore({
    reducer: combineStores,
    middleware: [...getDefaultMiddleware(), logger]
}); 

export default CreatedStore;