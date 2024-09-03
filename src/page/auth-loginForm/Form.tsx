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

import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Form: FunctionComponent = () => {


  const [email, setEmail] = useState('email')
  const [password, setPassword] = useState('password')
  const [error, setError] = useState('')

  const width = {
    width: '500px'
  }

  

  const requster: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setError('error')

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setEmail('')
        setPassword('')
      })
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Log in to your account' />
          <form className={styles.form} onSubmit={requster} action="">
            <h2 className={styles.title}>Email</h2>
            <Input onChange={(e) => setEmail(e.currentTarget.value)} placeholder='email' />
            <h2 className={styles.title}>Password</h2>
            <Input
              onChange={(e) => setPassword(e.currentTarget.value)} placeholder='password' />
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
