"use client"

import '../tokens/style/colors.css'

import { Error } from '@/components/error/Error';
import Form from '@/page/auth-loginForm/Form';
import DesignСourses from '@/page/Design-courses/DesignСourses';
import HomePage from '@/page/home/Home';
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
      <Header key={null} type={undefined} props={undefined} />
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<Error />} />
          <Route path="/" element={<Form />} />
          <Route path="/DesignСourses" element={<DesignСourses/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
