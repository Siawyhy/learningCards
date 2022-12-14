import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './fetchQuerySlice';

// const stringMiddleware = () => (next) => (action) => {
//     if (typeof action === 'string') {
//         return next({
//             type: action
//         })
//     }
//     return next(action)
// }

const store = configureStore ({
    reducer: {[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(/*stringMiddleware,*/ apiSlice.middleware),
})

export default store;