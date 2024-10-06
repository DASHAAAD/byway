"use client";

import Register from "@/page/auth-register/Register";


export * from "@mui/material";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
      <Register />
    </main>
  );
}
