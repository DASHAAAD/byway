"use client"

import { Card } from '@/components/card/Card';
import '../tokens/style/colors.css'



export * from "@mui/material";

export default function Home() {
  return (

    <main className="bg-slate-500 flex flex-col h-screen justify-between">
      <Card />
    </main>

  );
}
