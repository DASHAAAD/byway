/* eslint-disable react/jsx-key */
import { CardUser } from '@/components/cards/CardUser/CardUser'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import { Title } from '@/components/Title/Title'
import React, { FC } from 'react'

import { ArrayProductCard } from '../../components/cards/ProductCard/ProductCard'
import { CoursesList } from '@/components/coursesList/coursesList'
import styles from './Courses.module.css';

ArrayProductCard.splice(3)

for (let i = 0; i < 1; i++) {
    const element = ArrayProductCard[i];
    console.log(element)

}
console.log(ArrayProductCard)

export const Courses: FC = () => {
    return (
        <div className={styles.container}>

            <section className={styles.section}>
                <Title text='All courses' />
                <div className={styles.wrapper}>
                    <CoursesList />
                    <div>
                        {ArrayProductCard.map(i => {
                            return (
                                <ProductCard />
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <Title text='Popular Mentors' />
                <CardUser />
            </section>

            <section className={styles.section}>
                <Title text='Popular Courses' />
                <ProductCard />
            </section>

        </div>
    )
}
