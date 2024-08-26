"use client";
export * from "@mui/material";
import DesignСourses from "@/page/Design-courses/DesignСourses";
import '../../firebase'

export default function Home () {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">
    <DesignСourses/>
    </main>
  );
}
