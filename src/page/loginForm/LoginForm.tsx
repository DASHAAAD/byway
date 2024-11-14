import React, { FunctionComponent } from 'react'
import styles from './LoginForm.module.css'

import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'
import { Title } from '../../components/Title/Title'

import girl from '../../image/girl.png'
import Image from 'next/image'

export  const LoginForm: FunctionComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Title text='Log in to your account' />
          <form className={styles.form} action="">
            <h3 className={styles.title}>Email</h3>
            <input className={styles.input} type="text" placeholder='Email ID' />
            <h3 className={styles.title}>Password</h3>
            <input className={styles.input} type="text" placeholder='Enter Password' />
            {/* /// */}
            <ButtonBlack text='Sign in'/>
            
          </form>
        </div>
        <Image src={girl} alt={''} />
      </div>
    </>
  )
}


