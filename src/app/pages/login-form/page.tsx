/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { FunctionComponent, useState } from "react";
import styles from "../auth-register/auth-register-styles.module.css";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "@/components/button/button";
import Input from "@/components/Input/Input";
import { Title } from "@/components/Title/Title";

import Image from "next/image";
import girl from "../../image/girl.png";
import { setUser } from "@/slice/form-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonLarge } from "@/components/button/button-ui.stories";
import { TitleDefault } from "@/components/Title/title-ui.stories";

const LoginForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      dispatch(setUser({ id: userCredential.user.uid, email, password }));
      console.log("успешно");
      setEmail("");
      setPassword("");
      navigate("/EditProfile");
    } catch (err) {
      console.error(err);
      navigate("/Error");
    }
  };

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.container}>
            <Title
              className={styles.mb24}
              {...TitleDefault.args}
              text="Log in to your account"
            />
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

              <Button {...ButtonLarge.args} text="Create account" />
            </form>
          </div>
        </div>
        <Image src={girl} alt={""} />
      </div>
    </section>
  );
};

export default LoginForm;
