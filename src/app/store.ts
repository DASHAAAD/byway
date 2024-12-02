import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/slice/CardUserSlice';
import { coursesSlice } from '@/components/coursesList/coursesListSlice';
import { CardSlice } from '@/components/cards/ProductCard/ProductCardSlice';
import Users from '@/slice/formSlice';
import { TextSlice } from '@/slice/TextSlice';



export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    coursesSlice: coursesSlice.reducer,
    CardSlice: CardSlice.reducer,
    UsersSlice: Users.reducer,
    TextSlice: TextSlice.reducer
  },
});



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

