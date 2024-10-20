"use client"

import { Card } from '@/components/card/Card';
import '../tokens/style/colors.css'


import { Provider } from 'react-redux';
import store from './store'


export * from "@mui/material";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-slate-500 flex flex-col h-screen justify-between">
        
      </main>
    </Provider>
  );
}
