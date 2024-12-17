"use client";
import { db } from "@/app/firebase";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const setUserAsyncThunk = createAsyncThunk("data/setUser", async () => {
  try {
    const dataCollection = collection(db, "usersRedux");
    const querySnapshot = await getDocs(dataCollection);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error); // Логируем ошибку
    throw error; // Выбрасываем ошибку, чтобы её можно было отследить в компоненте
  }
});

// изменить данные массива

// export const deleteUserAsyncThunk = createAsyncThunk('data/fetchData', async () => {
//   const db = getFirestore();
//     const dataCollection = collection(db, 'usersRedux');
//     const querySnapshot = await getDocs(dataCollection);
//     const data = querySnapshot.docs.filter((id) => id !== id);
//     return data;
// });

export const deleteUserAsyncThunk = createAsyncThunk(
  "data/deleteUser",
  async () => {
    const db = getFirestore();
    const dataCollection = collection(db, "usersRedux");
    const querySnapshot = doc(dataCollection);
    await deleteDoc(querySnapshot);
  },
);

interface user {
  id: string;
  email: string;
  password: string;
  name: string;
}

const Users = createSlice({
  name: "user",
  initialState: {
    users: [] as user[],
    loading: false,
    error: false,
  },
  reducers: {
    setUser(state, action) {
      state.users.push({
        id: action.payload.id,
        email: action.payload.text,
        password: action.payload.password,
        name: action.payload.name,
      });
    },
    deleteUser(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    updateUser(state, action) {
      const { id, email, password, name } = action.payload;
      const userToUpdate = state.users.find((user) => user.id === id);
      if (userToUpdate) {
        userToUpdate.email = email;
        userToUpdate.password = password;
        userToUpdate.name = name;
      }
    },
  },

  extraReducers: (builder) => {
    // добавление пользователя
    builder.addCase(setUserAsyncThunk.fulfilled, (state, action) => {
      state.users = action.payload as user[];
      state.loading = false;
      state.error = false;
    });
    // удаление пользователя
    builder.addCase(deleteUserAsyncThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
    });
  },
});

export const { setUser, deleteUser, updateUser } = Users.actions;

export default Users;
