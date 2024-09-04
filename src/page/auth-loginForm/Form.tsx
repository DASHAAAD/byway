/* eslint-disable react-hooks/rules-of-hooks */
import React, { FunctionComponent, ReactEventHandler, useCallback } from 'react'
import { useState } from 'react'
import styles from '../../page/auth-loginForm/Form.module.css'
import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'

import girl from '../../image/girl.png'
import Image from 'next/image'
import { Input } from '@/components/formItem/FormItem'
import { Title } from '@/components/Title/Title'
import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'


import {createUser, signInUser} from "../../../firebase";
import {startSession} from "../../session";

const Form: FunctionComponent = () => {


  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // clear the errors
    setError("");

    // TODO: send the login request
    console.log("Logging in...");
  }

  
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const width = {
    width: '500px'
  }


  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Log in to your account' />
          <form className={styles.form} 
          id="firebaseui-auth-container"
          onSubmit={onSubmit} 
          action="">
            <h2 className={styles.title} >Email</h2>
            <Input onChange={(e) => setEmail(e.currentTarget.value)} value={email} placeholder='email' />
            <h2 className={styles.title}>Password</h2>
            <Input
              onChange={(e) => setPassword(e.currentTarget.value)} value={password} placeholder='password' />
            <ButtonBlack style={width} text='Sign in' />
          </form>
        </div>
        <Image src={girl} alt={''} />
      </div>
      <Footer />
    </>
  )
}

export default Form
