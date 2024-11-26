import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import './playgroundSlice'
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const auth = getAuth();

// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Reg: FC = () => {
  // const dispatch = useDispatch();
  // const navigateTo = useNavigate();




  return (
    <form >
      <input
        style={{ width: "200", height: "200", backgroundColor: "red" }}
       
        placeholder="email"
      />
      <input
        style={{
          width: "200",
          height: "200",
          backgroundColor: "red",
          marginBottom: "40px",
        }}
        // onChange={(e) => setPassword(e.currentTarget.value)}
        // value={password}
        placeholder="password"
      />
      <button
      
      
        style={{ width: "200px", height: "20px", backgroundColor: "red" }}
      >
        отправить
      </button>
    </form>
  );
};
