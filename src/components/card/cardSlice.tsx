import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
    name: 'counter',
    initialState: {
        titleText: `Beginner’s Guide to Design`,
        name: `By Ronald Richards`,
        price: `$149.9`
    },
    reducers: {
        name: (state) => {
            state.name
        },
        price: (state) => {
            state.price 
        },
        titleText: (state) => {
            state.titleText
        },
    },
});

export const { name, price, titleText } = cardSlice.actions;

export default cardSlice.reducer;