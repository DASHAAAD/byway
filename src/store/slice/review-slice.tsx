import { createEntityAdapter, createSlice, EntityId } from "@reduxjs/toolkit";

interface Review {
  id: EntityId;
  reviewId: String;
  // user: User.id
  // course: Course.id
  // rating: Number (integer)
  content: String;
  createdAt: Date;
}

const reviewAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewAdapter.getInitialState(),
  reducers: {},
});
