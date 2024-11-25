import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    id: null,
    loading: false,
  };
  
  export const PlaygrounSlice = createSlice({
    name: "PlaygrounSlices",
    initialState,
    // создать пользователя
    reducers: {
      setUser(
        state: { email: any; password: any; id: any },
        action: { payload: { email: any; password: any; id: any } }
      ) {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.id = action.payload.id;
      },
      // удалить пользователя
      removeUser(state: { email: null; password: null; id: null }) {
        state.email = null;
        state.password = null;
        state.id = null;
      },
    },
  });
  
  export const { setUser, removeUser } = PlaygrounSlice.actions;
  
