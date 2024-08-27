/* eslint-disable react-hooks/rules-of-hooks */
import React, { FunctionComponent, useCallback } from 'react'
import { useState } from 'react'
import styles from '../../page/auth-loginForm/Form.module.css'
import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'

import girl from '../../image/girl.png'
import Image from 'next/image'
import FormItem from '@/components/formItem/FormItem'
import { Title } from '@/components/Title/Title'
import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'

// import { FormItemProps } from '@/components/formItem/FormItem'



const Form: FunctionComponent = () => {

  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

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
            <FormItem
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <FormItem

            />
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
