"use client";
import './firebase'
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";
import { Reg } from "@/page/playground/playground";
import '../page/playground/playgroundSlice'


export default function Home() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header key={null} type={undefined} props={undefined} />
          <Reg />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
