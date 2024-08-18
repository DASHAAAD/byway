import React, { FunctionComponent } from 'react'

import Footer from '@/sections/Footer/Footer'
import Header from '@/sections/Header/Header'

import styles from './Home.module.css'

import people from '../../image/people.png'
import Image from 'next/image'
import man from '../../image/man.png'
import manTwo from '../../image/man2.png'

import { AstrologyCards } from '@/components/astrologyCards/AstrologyCards'
import Card from '@/components/card/Card'
import CategoryCard from '@/components/categoryCard/CategoryCard'


const HomePage: FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>

            <Header />
            <div className={styles.container}>
                <main className={styles.main}>

                    <section className={`${styles.section} ${styles.advertisement}`}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>Unlock Your Potential with Byway</h1>
                            <p className={styles.text}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we re here to guide you on your journey to success. </p>
                            <button className={styles.button}>Start your instructor journey</button>
                        </div>
                        <Image src={people} alt={''} />
                    </section>

                    <section className={styles.section}>
                        <ul className={styles.List}>
                            <li className={styles.Item}>
                                <h3 className={styles.statisticsTitle}>250+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>
                            </li>
                            <li className={styles.Item}>
                                <h3 className={styles.statisticsTitle}>1000+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>
                            </li>
                            <li className={styles.Item}>
                                <h3 className={styles.statisticsTitle}>15+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>
                            </li>
                            <li className={styles.Item}>
                                <h3 className={styles.statisticsTitle}>2400+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.title}>Top Categories</h2>
                        <ul className={styles.List}>
                            <li className={styles.Item}>
                                <AstrologyCards />
                            </li>
                            <li className={styles.Item}>
                                <AstrologyCards />
                            </li>
                            <li className={styles.Item}>
                                <AstrologyCards />
                            </li>
                            <li className={styles.Item}>
                                <AstrologyCards />
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.title}>Top Courses</h2>
                        <ul className={styles.List}>
                            <li className={styles.Item}>
                                <Card />
                            </li>
                            <li className={styles.Item}>
                                <Card />
                            </li>
                            <li className={styles.Item}>
                                <Card />
                            </li>
                            <li className={styles.Item}>
                                <Card />
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.title}>Top Instructors</h2>
                        <ul className={styles.List}>
                            <li className={styles.Item}>
                                <CategoryCard />
                            </li>
                            <li className={styles.Item}>
                                <CategoryCard />
                            </li>
                            <li className={styles.Item}>
                                <CategoryCard />
                            </li>
                            <li className={styles.Item}>
                                <CategoryCard />
                            </li>
                        </ul>
                    </section>

                    <section className={`${styles.section} ${styles.advertisement}`}>
                        <Image src={man} alt={''} />
                        <div className={styles.info}>
                            <h1 className={styles.title}>Become an Instructor</h1>
                            <p className={styles.text}>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                            <button className={styles.button}>Start your instructor journey</button>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.advertisement}`}>
                        <div className={styles.info}>
                            <h1 className={styles.title}>Transform your life through education</h1>
                            <p className={styles.text}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                            <button className={styles.button}>Checkout courses</button>
                        </div>
                        <Image src={manTwo} alt={''} />
                    </section>

                </main>
            </div>
            
            <Footer />
        </div>


    )
}

export default HomePage