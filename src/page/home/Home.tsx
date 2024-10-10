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

import { Title } from '@/components/Title/Title'
import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'
import { LayoutFlex } from '@/LayoutComponents/LayoutFlex/LayoutFlex'
import LayoutColumn from '@/LayoutComponents/LayoutColumn/LayoutColumn'


const HomePage: FunctionComponent = (props) => {
    return (
        <div className={styles.wrapper}>

            <Header key={null} type={undefined} props={undefined} />
            <div className={styles.container}>
                <main className={styles.main}>

                    <section className={`${styles.section} ${styles.advertisement}`}>
                        <LayoutFlex className='flex'
                            Left={
                                <div className={styles.info}>
                                    <Title text='Unlock Your Potential with Byway' />
                                    <div className={styles.text}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we re here to guide you on your journey to success. </div>
                                    <ButtonBlack text='Start your instructor journey' />
                                </div>
                            }
                            Right={
                                <Image src={people} alt={''} />
                            }
                        />
                    </section>

                    <section>

                        <LayoutFlex className={styles.List}>

                            <LayoutColumn className={styles.Item}>

                                <h3 className={styles.statisticsTitle}>15+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>

                            </LayoutColumn>
                            <LayoutColumn className={styles.Item}>

                                <div className={styles.statisticsTitle}>1000+</div>
                                <div className={styles.statisticsText}>Courses by our best mentors</div>

                            </LayoutColumn>
                            <LayoutColumn className={styles.Item}>

                                <h3 className={styles.statisticsTitle}>15+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>

                            </LayoutColumn>
                            <LayoutColumn className={styles.Item}>

                                <h3 className={styles.statisticsTitle}>2400+</h3>
                                <p className={styles.statisticsText}>Courses by our best mentors</p>

                            </LayoutColumn>
                        </LayoutFlex>

                    </section>

                    <section className={styles.section}>
                        <Title text='Top Categories' />
                        <div className={styles.List}>
                            <LayoutColumn>
                                <AstrologyCards title='title' text='text' />
                            </LayoutColumn>
                            <LayoutColumn>
                                <AstrologyCards title='title' text='text' />
                            </LayoutColumn>
                            <LayoutColumn>
                                <AstrologyCards title='title' text='text' />
                            </LayoutColumn>
                            <LayoutColumn>
                                <AstrologyCards title='title' text='text' />
                            </LayoutColumn>
                            <LayoutColumn>
                                <AstrologyCards title='title' text='text' />
                            </LayoutColumn>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <Title text='Top Courses' />
                        <div className={styles.List}>
                            <LayoutColumn>
                                <Card title='title' name='name' price={0} />
                            </LayoutColumn>
                            <LayoutColumn>
                                <Card title='title' name='name' price={0} />
                            </LayoutColumn>
                            <LayoutColumn>
                                <Card title='title' name='name' price={0} />
                            </LayoutColumn>
                            <LayoutColumn>
                                <Card title='title' name='name' price={0} />
                            </LayoutColumn>
                            <LayoutColumn>
                                <Card title='title' name='name' price={0} />
                            </LayoutColumn>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <Title text='Top Courses' />
                        <div className={styles.List}>
                            <LayoutColumn>
                                <div className={styles.Item}>
                                    <CategoryCard title='title' text='text' />
                                </div>
                            </LayoutColumn>
                            <LayoutColumn>
                                <div className={styles.Item}>
                                    <CategoryCard title='title' text='text' />
                                </div>
                            </LayoutColumn>
                            <LayoutColumn>
                                <div className={styles.Item}>
                                    <CategoryCard title='title' text='text' />
                                </div>
                            </LayoutColumn>
                            <LayoutColumn>
                                <div className={styles.Item}>
                                    <CategoryCard title='title' text='text' />
                                </div>
                            </LayoutColumn>
                            <LayoutColumn>
                                <div className={styles.Item}>
                                    <CategoryCard title='title' text='text' />
                                </div>
                            </LayoutColumn>
                        </div>
                    </section>

                    <section>
                        <LayoutFlex className={styles.List}
                            Left={<Image src={man} alt={''} />}
                            Right={
                                <div className={styles.info}>
                                    <Title text='Become an Instructor' />
                                    <p className={styles.text}>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                                    <ButtonBlack text='Start your instructor journey' />
                                </div>
                            }
                        />
                    </section>

                    <section>
                        <LayoutFlex className={styles.List}
                            Left={
                                <div className={styles.info}>
                                    <Title text='Transform your life through education' />
                                    <p className={styles.text}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                                    <ButtonBlack text='Checkout courses' />
                                </div>
                            }
                            Right={
                                <Image src={manTwo} alt={''} />
                            }
                        />
                    </section>

                </main>
            </div>

            <Footer />
        </div>


    )
}

export default HomePage