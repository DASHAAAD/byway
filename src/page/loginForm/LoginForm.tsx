/* eslint-disable react-hooks/rules-of-hooks */
import React, { FunctionComponent, useState } from "react";
import styles from "../auth-register/Register.module.css";

import { auth } from "../../app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ButtonBlack } from "@/components/ButtonBlack/ButtonBlack";
import Input from "@/components/formItem/FormItem";
import { Title } from "@/components/Title/Title";

import Image from "next/image";
import girl from "../../image/girl.png";
import { setUser } from "@/slice/formSlice";
import { useDispatch } from "react-redux";


const LoginForm: FunctionComponent = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: { preventDefault: (arg0: string) => void; }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser({ id: userCredential.user.uid, email, password }));
      console.log("успешно");
      e.preventDefault("")
      setEmail('')
      setPassword('')
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
        <div className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.container}>
          <Title text="Log in to your account    " className={styles.title} />
          <form action="" onSubmit={signIn}>

            <h3 className={styles.subTitle}>Email</h3>
            <Input
              title="Email"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              className={styles.input}
            />
            <h3 className={styles.subTitle}>Password</h3>
            <Input
              title="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              className={styles.input}
            />
            <ButtonBlack className={styles.button} text={"Create account"} />
          </form>
        </div>
      </div>
      <Image src={girl} alt={""} />
      </div>
    </section>
  );
};

export default LoginForm;
