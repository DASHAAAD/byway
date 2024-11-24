import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act, useState } from "react";

import { initializeApp } from "firebase/app";

import { firebaseConfig } from '../../app/firebase';

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection } from "firebase/firestore/lite";

initializeApp(firebaseConfig);

const initialState = {
  users: [],
  email: null,
  password: null,
  id: null,
  loading: false,
};

const auth = getAuth();
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async function () {
    // const usersRef = firestore.collection('users');
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = response.json();
    return data;
    console.log(response);
  }
  
);

export const usersSlice = createSlice({
  name: "PlaygroundSlises",
  initialState,
  reducers: {
    setinitialState(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.loading = action.payload.loading;
    },
    removeUser(state) {
      state.email = null;
      state.password = null;
      state.id = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = true;
      state.users = action.payload;
    });
  },
});
