import React, { FunctionComponent } from 'react'
import styles from '../../components/auth-loginForm/Form.module.css'
import ButtonBlack from '../ButtonBlack/buttonBlack'
import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'
import { Title } from '../Title/Title'
import girl from '../../image/girl.png'
import Image from 'next/image'
import FormItem from '../formItem/FormItem'


const Form: FunctionComponent = () => {
  const width = {
    width: '500px'
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Log in to your account' />
          <form className={styles.form} action="">
            <FormItem title='Email' text='Email ID' />
            <FormItem title='Password' text='Enter Password' />
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
