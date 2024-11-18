"use client"

import { CardUser } from '@/components/cards/CardUser/CardUser';
import '../tokens/style/colors.css'



import DesignСourses from '@/page/Design-courses/DesignСourses';
import { LoginForm } from '@/page/loginForm/LoginForm';
import Footer from '@/sections/Footer/Footer';
import Header from '@/sections/Header/Header';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { createRandomUser } from '@/page/playground';
import { Nav } from '@/components/NavigationMenu/Nav';
import { NavWrapper } from '@/components/NavigationMenu/NavWrapper';


console.log(createRandomUser)

export default function Home() {
  return (
    <>
      <Header key={null} type={undefined} props={undefined} />
      {/*   <BrowserRouter>
        <Routes>

          <Route path="*" element={<Error />} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/DesignСourses" element={<DesignСourses/>} />

        </Routes>
      </BrowserRouter>
      <CardUser > */}
      <NavWrapper>
        <NavWrapper.Nav />
        <NavWrapper.List>
          ssssss
          <NavWrapper.Item>Edit</NavWrapper.Item>
          <NavWrapper.Item>Delete</NavWrapper.Item>
        </NavWrapper.List>
      </NavWrapper>
      <Footer />

    </>
  );
}
