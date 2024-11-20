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
import { EditProfile } from '@/page/EditProfile/EditProfile';
import { Courses } from '@/page/courses/Courses';
import Register from '@/page/auth-register/Register';
import { RoutesUi } from '@/RoutesUi/RoutesUi';
import React from 'react';

export default function Home() {
  return (
    <>
     
        <BrowserRouter>
        <Header key={null} type={undefined} props={undefined} />
          <RoutesUi />
         
          <Footer />
        </BrowserRouter>
     
    </>
  )
}
