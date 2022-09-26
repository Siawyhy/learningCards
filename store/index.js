import { configureStore } from '@reduxjs/toolkit';

import cards from './cardsSlice'

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore ({
    reducer: {cards},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
//  /*enable dev tools*/    devTools: process.env.NODE_ENV !== 'production',
})

export default store;