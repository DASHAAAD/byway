// import ButtonBlack from '@/components/ButtonBlack/buttonBlack'
// import FormItem from '@/components/formItem/FormItem'
import { Title } from "@/components/Title/Title";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import girl from "../../image/girl2.png";
import styles from "../../page/auth-register/Register.module.css";

import { useState } from "react";
import Input from "@/components/formItem/FormItem";
import ButtonBlack from "@/components/ButtonBlack/ButtonBlack";


import { firebaseConfig } from '../../app/firebase';
import { initializeApp } from "firebase/app";

import {

  createUserWithEmailAndPassword,
  getAuth,

} from 'firebase/auth';

initializeApp(firebaseConfig);

const auth = getAuth();

const Register: FunctionComponent = () => {
  const [email, emailInput] = useState("");
  const [password, passwordInput] = useState("");

  const auth = getAuth();
  function handleSignUp() {
    if (email.length < 4) {
      alert("Please enter an email address.");
      return;
    }
    if (password.length < 4) {
      alert("Please enter a password.");
      return;
    }
    // Create user with email and pass.
    createUserWithEmailAndPassword(auth, email, password).catch(function (
      error
    ) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  return (
    <section>
      <div className={styles.container}>
        <Image src={girl} alt={""} />
        <div className={styles.wrapper}>
          <form action="" onSubmit={handleSignUp}>
            <Input title="Name" placeholder="Name" />
            <Input
              onChange={(e) => emailInput(e.currentTarget.value)}
              placeholder="email"
            />

            <Input
              onChange={(e) => passwordInput(e.currentTarget.value)}
              placeholder="password"
            />
            <ButtonBlack text="Create account" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
