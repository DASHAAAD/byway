import { createEntityAdapter, createSlice, EntityId } from "@reduxjs/toolkit";

interface Category {
  id: EntityId;
  categoryId: string;
  label: String;
  description: String;
  cover?: typeof Image;
  //   courses: Array<Course.id>;
}

const categoryAdapter = createEntityAdapter<Category>();

export const categorySlice = createSlice({
  name: "category",
  initialState: categoryAdapter.getInitialState(),
  reducers: {},
});
