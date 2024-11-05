import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../components/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
