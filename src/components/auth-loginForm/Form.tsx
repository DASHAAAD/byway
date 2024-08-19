import React, { FunctionComponent } from 'react'
import styles from '../../components/auth-loginForm/Form.module.css'
import ButtonBlack from '../ButtonBlack/buttonBlack'
import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'
import { Title } from '../Title/Title'
import girl from '../../image/girl.png'
import Image from 'next/image'


const Form: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Log in to your account' />
          <form className={styles.form} action="">
            <h3 className={styles.title}>Email</h3>
            <input className={styles.input} type="text" placeholder='Email ID' />
            <h3 className={styles.title}>Password</h3>
            <input className={styles.input} type="text" placeholder='Enter Password' />
            <ButtonBlack text='Sign in' />
          </form>
        </div>
        <Image src={girl} alt={''} />
      </div>
      <Footer />
    </>
  )
}

export default Form
