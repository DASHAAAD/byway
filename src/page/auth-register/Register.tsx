// import ButtonBlack from '@/components/ButtonBlack/buttonBlack'
// import FormItem from '@/components/formItem/FormItem'
import { Title } from '@/components/Title/Title'
import Footer from '@/sections/Footer/Footer'
import Header from '@/sections/Header/Header'
import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import girl from '../../image/girl2.png'
import styles from '../../page/auth-register/Register.module.css'

import { useState } from "react";
import { Input } from '@/components/formItem/FormItem'
import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'



const Register: FunctionComponent = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const onSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        // validate the inputs
        if (!email || !password || !repeatPassword) {
            setError("Please fill out all the fields.");
            return;
        }
        if (password !== repeatPassword) {
            setError("Passwords do not match");
            return;
        }

        // clear the errors
        setError("");

        // TODO: send the register request
        console.log("Registering...");
    }

    return (
        <section>
            <Header />
            <div className={styles.container}>
                <Image src={girl} alt={''} />
                <div className={styles.wrapper}>
                    <Title text='Create Your Account' />
                    <form action="" onSubmit={onSubmit} >
                        <Input
                            title='Name'
                            placeholder='Name'
                        />
                        <Input
                            title='Email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <Input
                            title='password'
                            placeholder='password'
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            value={password}
                        />
                        <ButtonBlack text='Create account' />
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Register