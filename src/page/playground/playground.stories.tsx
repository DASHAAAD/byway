import React from "react";
import { Playground } from "./playground";
import { StoryObj } from "@storybook/react";
import { initializeApp } from "firebase/app";
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import firebase from "firebase";

export const Meta = {
  title: "PlaygroundTitle",
  component: Playground,
};

type Story = StoryObj<typeof Meta>;

export const PlaygrounS: Story = {
  args: {
    initializeState: [],
    loading: false,
    id: nanoid,
  },
};
 const initialState = {
  email: null,
  password: null,
  id: null,
  loading: false
};

const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const db = firebase.firestore();
    const snapshot = await db.collection('items').get();
    const items = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  });

const PlaygrounSlice = createSlice({
  name: "PlaygrounSlices",
  initialState,
  // создать пользователя
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
    // удалить пользователя
    removeUser(state) {
      state.email = null;
      state.password = null;
      state.id = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
       
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = true;
      });
  },
});

export const { setUser, removeUser } = PlaygrounSlice.actions;

export default PlaygrounSlice.reducer;
