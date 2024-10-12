"use client"
import '../tokens/style/colors.css'
import Card from "@/components/card/Card"


export * from "@mui/material";

export default function Home() {
  return (
   
      <main className="bg-slate-500 flex flex-col h-screen justify-between">
       <Card title={""} name={""} price={0}/>
      </main>
   
  );
}
