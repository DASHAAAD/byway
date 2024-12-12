/* eslint-disable react-hooks/rules-of-hooks */
import React, { FunctionComponent, useState } from "react";
import styles from "../auth-register/Register.module.css";

import { auth } from "../../app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ButtonBlack } from "@/components/button/button";
import Input from "@/components/input/input";
import { Title } from "@/components/title/title";

import Image from "next/image";
import girl from "../../image/girl.png";
import { setUser } from "@/slice/form-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const LoginForm: FunctionComponent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(setUser({ id: userCredential.user.uid, email, password }));
      console.log("успешно");
      setEmail('')
      setPassword('')
      navigate('/EditProfile')
    } catch (err) {
      console.error(err);
      navigate('/Error')
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
