import React, { FC, useState } from "react";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Playground: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
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
      <button style={{ color: "red", fontSize: "40px" }} onClick={signIn}>кнопка</button>
    </div>
  );
};
