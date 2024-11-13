"use client"

import { CardUser } from '@/components/cards/CardUser/CardUser';
import '../tokens/style/colors.css'

import { Error } from '@/components/error/Error';

import DesignСourses from '@/page/Design-courses/DesignСourses';
import { LoginForm } from '@/page/loginForm/LoginForm';
import Footer from '@/sections/Footer/Footer';
import Header from '@/sections/Header/Header';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default function Home() {
  return (
    <>
      {/* <Header key={null} type={undefined} props={undefined} />
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<Error />} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/DesignСourses" element={<DesignСourses/>} />

        </Routes>
      </BrowserRouter>
      <CardUser >
      <Footer /> */}
      <CardUser/>
    </>
  );
}
