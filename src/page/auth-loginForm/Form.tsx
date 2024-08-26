/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEventHandler, FunctionComponent, useState } from 'react'
import styles from '../../components/auth-loginForm/Form.module.css'
import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'

import girl from '../../image/girl.png'
import Image from 'next/image'
import FormItem from '@/components/formItem/FormItem'
import { Title } from '@/components/Title/Title'
import ButtonBlack from '@/components/ButtonBlack/buttonBlack'
// import { register } from 'module'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase';
import { request } from 'http'

const [email, setEmail] = useState('')

const [password, setPassword] = useState('')
const [copyPassword, setCopyPassword] = useState('')
const [error, setError] = useState('')

interface formProps {
  onSubmit: FormEventHandler
}

let formPropsEl: formProps = {
  onSubmit: request
}

const Form: FunctionComponent = () => {

  const width = {
    width: '500px'
  }
  function register(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (copyPassword !== password) {
      setError('passwords didnt match')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setEmail("");
        setCopyPassword("");
        setPassword("")

      })
  }
  const onChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEmail(event.currentTarget.value)
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Log in to your account' />
          <form className={styles.form} action="">
            <FormItem value={email}
              onChange={onChange}
              title='Email'
              text='Email ID'
            />
            <FormItem value={password} title='Password' text='Enter Password' />
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
