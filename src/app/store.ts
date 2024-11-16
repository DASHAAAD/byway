import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/components/cards/CardUser/CardUserSlice';
import { coursesSlice } from '@/components/coursesList/coursesListSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    coursesSlice: coursesSlice.reducer
  },
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
