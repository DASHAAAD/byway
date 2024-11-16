import { configureStore } from '@reduxjs/toolkit';

import { userSlice } from '@/components/cards/CardUser/CardUserSlice';

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
