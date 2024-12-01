import React, { FC, useState } from "react";
import { auth } from "@/app/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/slice/formSlice";



export const Playground: FC = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser({ id: userCredential.user.uid, email, password }));
      console.log("успешно");
    } catch (err) {
      console.error(err);
    }
  };

  const [emailTwo, setEmaiTwo] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const formTwo = async () => {
    try {
      await signInWithEmailAndPassword(auth, emailTwo, passwordTwo);
      console.log("успешно");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <input
          style={{ color: "red", fontSize: "40px" }}
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          style={{ color: "red", fontSize: "40px" }}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button style={{ color: "red", fontSize: "40px" }} onClick={signIn}>
          кнопка
        </button>
      </div>
      <div style={{ backgroundColor: "red" }}>
        <input
          style={{ color: "red", fontSize: "40px" }}
          placeholder="email2"
          type="email2"
          onChange={(e) => setEmaiTwo(e.currentTarget.value)}
        />
        <input
          style={{ color: "red", fontSize: "40px" }}
          placeholder="password2"
          type="password2"
          onChange={(e) => setPasswordTwo(e.currentTarget.value)}
        />
        <button style={{ color: "red", fontSize: "40px" }} onClick={formTwo}>
          кнопка
        </button>
      </div>
    </>
  );
};
