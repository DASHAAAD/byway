"use client";
import React, { FunctionComponent, useState } from "react";
import { auth } from "@/firebase";

import styles from "./auth-register-styles.module.css";

import Input from "@/components/Input/Input";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/form-slice";
import { Title } from "@/components/Title/Title";

import girl from "@/image/girl.png";
import Image from "next/image";

import { ButtonLarge } from "@/components/button/button-ui.stories";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";

const Register: FunctionComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      dispatch(setUser({ id: userCredential.user.uid, email, password }));
      console.log("успешно");
      e.preventDefault;
      setEmail("");
      setPassword("");
      router.push("./pages/login-form");
    } catch (err) {
      router.push("./pages/error");
    }
  };

  return (
    <section>
      <div className={styles.containerR}>
        <Image className={styles.img} src={girl} alt={""} />
        <div>
          <Title text="Create Your Account" className={styles.title} />
          <form action="" onSubmit={signIn}>
            <h3 className={styles.subTitle}>Name</h3>
            <Input title="Name" placeholder="Name" className={styles.input} />
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

            <Button {...ButtonLarge.args} text={"Create account"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
