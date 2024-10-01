"use client";

import { LayoutFlex } from "@/LayoutComponents/LayoutFlex/LayoutFlex";
import LayoutFlexPage from "@/LayoutComponents/LayoutFlex/LayoutFlexPage";

export * from "@mui/material";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
      <LayoutFlexPage />
    </main>
  );
}
