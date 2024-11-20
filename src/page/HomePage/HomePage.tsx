import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'
import { Title } from '@/components/Title/Title'
import React, { FC } from 'react'

import Image from 'next/image'
import people from '../../image/people.png'
import man from '../../image/man.png'
import man2 from '../../image/man2.png'

import style from './HomePage.module.css'

import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import { CardUser } from '@/components/cards/CardUser/CardUser'
import { LayoutFlex } from '@/LayoutComponents/LayoutFlex/LayoutFlex'

export const SectionInfo: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <div className={style.width}>
          <Title text={'Unlock Your Potential with Byway'} />
          <p className={style.text}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and were here to guide you on your journey to success. </p>
          <ButtonBlack text='Start your instructor journey' />
        </div>
        <Image src={people} alt={''} />
      </div>
    </section>
  )
}

export const SectionAdvertisement: FC = () => {
  return (
    <section className={style.section}>
      <div>
        <ul className={style.flex}>
          <li>
            <h4 className={style.title}>250+</h4>
            <span>Courses by our best mentors</span>
          </li>
          <li>
            <h4 className={style.title}>100+</h4>
            <span>Experienced mentors</span>
          </li>
          <li>
            <h4 className={style.title}>2000+</h4>
            <span>Users learning something new</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export const SectionCourses: FC = () => {
  return (
    <section className={style.section}>
      <div>
        <div className={style.flex}>
          <Title text={'Top Courses'} />
          <ButtonBlack text='See all' />
        </div>
        <ProductCard />
      </div>
    </section>
  )
}

export const SectionInstructors: FC = () => {
  return (
    <section className={style.section}>
      <div>
        <Title text='Top Instructors' />
        <CardUser />
      </div>
    </section>
  )
}

export const SectionBecomeAnInstructor: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <Image src={man} alt={''} />
        <div className={style.width}>
          <Title text={'Become an Instructor'} />
          <p className={style.text}>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
          <ButtonBlack text='Start your instructor journey' />
        </div>
      </div>
    </section >
  )
}

export const SectionСhanges: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <div className={style.width}>
          <Title text={'Transform your life through education'} />
          <p className={style.text}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
          <ButtonBlack text='Checkout courses' />
        </div>
        <Image src={man2} alt='' />
      </div>
    </section>
  )
}

export const HomePage: FC = () => {
  return (
    <div className={style.container}>
      <SectionInfo />
      <SectionAdvertisement />
      <SectionCourses />
      <SectionInstructors />
      <SectionBecomeAnInstructor />
      <SectionСhanges />
    </div>
  )
}

