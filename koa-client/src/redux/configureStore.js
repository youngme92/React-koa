import { configureStore } from '@reduxjs/toolkit';
import combineStores from './modules';


// 원래 함수 실행을 변수로 바꿔서 진행함
const CreatedStore = configureStore({
    reducer: combineStores
}); 

export default CreatedStore;