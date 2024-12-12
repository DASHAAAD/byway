import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

interface Type {
  title?: string;
  price?: string;
  map?: ReactNode;
  src?: string;
}

export const ProductCard = createSlice({
  name: "Card",
  initialState: [] as Type[],
  reducers: {
    newArr: {
      reducer: (state, action: PayloadAction<Type>) => {
        state.push(action.payload);
      },
      prepare: (title: string, price: string, map) => {
        const id = nanoid();
        return { payload: { title, price, map } };
      },
    },
  },
});
