"use client";

import HomePage from "@/page/home/Home";

export * from "@mui/material";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
      <HomePage />
    </main>
  );
}
