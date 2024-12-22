"use client";
import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "@/app/store/slice/card-user-slice";
import { coursesSlice } from "@/components/courses-list/courses-list-slice";
import Users from "@/app/store/slice/form-slice";
import { TextSlice } from "@/app/store/slice/text-slice";
import { ProductCard } from "@/components/cards/product-card/product-card-slice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    coursesSlice: coursesSlice.reducer,
    ProductCard: ProductCard.reducer,
    UsersSlice: Users.reducer,
    TextSlice: TextSlice.reducer,
  },
});

export default store;
