"use client"

import '../tokens/style/colors.css'

import { Error } from '@/components/error/Error';
import HomePage from '@/page/home/Home';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default function Home() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<Error />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  );
}
