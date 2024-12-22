import { createEntityAdapter, createSlice, EntityId } from "@reduxjs/toolkit";

interface User {
  id: EntityId;
  userId: String;
  email: String;
  name: String;
  // cover: Image
  headline: String;
  description: String;
  socials: String[];
  // courses: Array<Course.id>
  // reviews: Array<Review.id>
  // purchases: Array<Purchase.id>
}

const userAdapter = createEntityAdapter<User>();

export const userSlice = createSlice({
  name: "user",
  initialState: userAdapter.getInitialState(),
  reducers: {},
});
