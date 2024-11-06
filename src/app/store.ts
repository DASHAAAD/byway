import { configureStore } from '@reduxjs/toolkit';

import counterSlice from '../components/counterSlice';
import cardSlice from '../components/card/cardSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    card: cardSlice
  },
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
