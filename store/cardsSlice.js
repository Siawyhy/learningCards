import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../hooks/usehttp';

const initialState = {
    cards: [],
    cardsLoadingStatus: 'idle'
}

export const fetchCards = createAsyncThunk(
    'cards/cardsFetching',
    async () => {
        const {request} = useHttp();
        return await request('http://localhost:3001/cards');
    }
);

const cardsSlice = createSlice ({
    name: 'cards',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchCards.pending]: state => {state.cardsLoadingStatus = 'loading'},
        [fetchCards.fulfilled]: (state, action) => {
                console.log(action.payload)
                state.cardsLoadingStatus = 'idle';
                state.cards = action.payload;
            },
        [fetchCards.rejected]: state => {state.cardsLoadingStatus = 'error'}

    },
});

const {reducer} = cardsSlice;

export default reducer;

// export const{

// } = action