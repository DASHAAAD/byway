"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextState {
  name: string;
  headline: string;
  language: string;
  LinksOne: string;
  LinkstWO: string;
  LinksThree: string;
}

const initialState: TextState = {
  name: "",
  headline: "",
  language: "",
  LinksOne: "",
  LinkstWO: "",
  LinksThree: "",
};

export const TextSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText(state, action: PayloadAction<TextState>) {
      state.name = action.payload.name;
      state.headline = action.payload.headline;
      state.language = action.payload.language;
      state.LinksOne = action.payload.LinksOne;
      state.LinkstWO = action.payload.LinkstWO;
      state.LinksThree = action.payload.LinksThree;
    },
  },
});

export const { addText } = TextSlice.actions;
