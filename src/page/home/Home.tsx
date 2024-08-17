import React, { FunctionComponent } from 'react'

import Footer from '@/sections/Footer/Footer'
import Header from '@/sections/Header/Header'

import styles from './Home.module.css'

import people from '../../image/people.png'
import Image from 'next/image'



const HomePage: FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>

                <section className={`${styles.section} ${styles.advertisement}`}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Unlock Your Potential with Byway</h1>
                        <p className={styles.text}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we re here to guide you on your journey to success. </p>
                        <button className={styles.button}>Start your instructor journey</button>
                    </div>
                    <Image src={people} alt={''} />
                </section>

            </main>

            <Footer />
        </div>


    )
}

export default HomePage