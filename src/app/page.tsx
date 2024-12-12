"use client";
import "./firebase";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { RoutesUi } from "@/snake-case - router-ui/snake-case - router-ui";


export default function Home() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RoutesUi />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}
