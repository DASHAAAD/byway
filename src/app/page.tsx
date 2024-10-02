"use client";

import { LayoutElement } from "@/LayoutComponents/LayoutColumn/LayoutColumn";


export * from "@mui/material";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
    <LayoutElement />
    </main>
  );
}
