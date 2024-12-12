import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/slice/card-user-slice';
import { coursesSlice } from '@/components/courses-list/courses-list-slice';
import { CardSlice } from '@/components/cards/product-card/product-card-slice';
import Users from '@/slice/form-slice';
import { TextSlice } from '@/slice/text-slice';



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

