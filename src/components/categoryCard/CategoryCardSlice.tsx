import { createSlice } from "@reduxjs/toolkit";

const CategoryCardSlice = createSlice({
    name: 'CategoryCard',
    initialState: {
        title: 'Ronald Richards',
        text: 'UI/UX Designer'
    },
    reducers: {
        title: (state) => {
            state.title
        },
        text: (state) => {
            state.text
        }
    }
})

export const {title, text} = CategoryCardSlice.actions

export default CategoryCardSlice.reducer