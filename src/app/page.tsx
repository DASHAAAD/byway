"use client";

import LayoutComponents from "@/LayoutComponents/LayoutComponents";

export * from "@mui/material";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
      <LayoutComponents />
    </main>
  );
}
