"use client"

import '../tokens/style/colors.css'


import { Provider } from 'react-redux';
import {store} from '../app/store'
import CategoryCard from '@/components/categoryCard/CategoryCard';



export * from "@mui/material";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-slate-500 flex flex-col h-screen justify-between">
       <CategoryCard />
      </main>
    </Provider>
  );
}
