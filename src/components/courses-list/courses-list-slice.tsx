"use client";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Type {
  id?: string;
  placeholder?: string;
}

export const coursesSlice = createSlice({
  name: "courses",
  initialState: [] as Type[],
  reducers: {
    newArr: {
      reducer: (state, action: PayloadAction<Type>) => {
        state.push(action.payload);
      },
      prepare: (placeholder: string) => {
        const id = nanoid();
        return { payload: { id, placeholder } };
      },
    },
  },
});
