import { createEntityAdapter, createSlice, EntityId } from "@reduxjs/toolkit";

interface Course {
  id: EntityId;
  courseId: String;
  title: String;
  description: String;
  cover: typeof Image;
  price: Number;
}

const courseAdapter = createEntityAdapter<Course>();

export const courseSlice = createSlice({
  name: "course",
  initialState: courseAdapter.getInitialState(),
  reducers: {},
});
