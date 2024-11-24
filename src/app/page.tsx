"use client";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Playground } from "@/page/playground/playground";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header key={null} type={undefined} props={undefined} />
          <Playground />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
