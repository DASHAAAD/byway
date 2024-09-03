"use client";
export * from "@mui/material";
import Form from "@/page/auth-loginForm/Form";
import '../../firebase'

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
      <Form />
    </main>
  );
}
