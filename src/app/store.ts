import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/components/cards/CardUser/CardUserSlice';
import { coursesSlice } from '@/components/coursesList/coursesListSlice';
import { CardSlice } from '@/components/cards/ProductCard/ProductCardSlice';
import Users from '@/page/playground/playgroundSlice'


export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    coursesSlice: coursesSlice.reducer,
    CardSlice: CardSlice.reducer,
    UsersSlice: Users.reducer
  },
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch