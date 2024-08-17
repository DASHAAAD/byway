
import { AstrologyCards } from "@/components/astrologyCards/AstrologyCards";
import Card from "@/components/card/Card";
import CategoryCard from "@/components/categoryCard/CategoryCard";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";

export default function Home() {
  return (
    <main className="bg-slate-500 flex flex-col h-screen justify-between">

      <Header />
      <Card/>
      <CategoryCard/>
      <AstrologyCards/>
     <Footer/>

    </main>
  );
}
