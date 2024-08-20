import ButtonBlack from '@/components/ButtonBlack/buttonBlack'
import FormItem from '@/components/formItem/FormItem'
import { Title } from '@/components/Title/Title'
import Footer from '@/sections/Footer/Footer'
import Header from '@/sections/Header/Header'
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import girl from '../../image/girl2.png'
import styles from '../../page/auth-register/Register.module.css'

const Register: FunctionComponent = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Image src={girl} alt={''} />
                <div className={styles.wrapper}>
                    <Title text='Create Your Account' />
                    <form action="">
                        <FormItem title='Name' text='Name' />
                        <FormItem title='Email' text='Email ID' />
                        <FormItem title='Password' text='Enter Password' />
                    </form>
                    <ButtonBlack text='Create account' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register