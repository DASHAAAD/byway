import ButtonBlack from '@/components/ButtonBlack/ButtonBlack'
import { Title } from '@/components/Title/Title'
import React, { FC } from 'react'
import Image from 'next/image'
import people from '../../image/people.png'
import man from '../../image/man.png'
import man2 from '../../image/man2.png'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import { CardUser } from '@/components/cards/CardUser/CardUser'
import { LayoutFlex } from '@/LayoutComponents/LayoutFlex/LayoutFlex'

export const SectionInfo: FC = () => {
  return (
    <section>
      <div>
        <div>
          <Title text={'Unlock Your Potential with Byway'} />
          <p>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and were here to guide you on your journey to success. </p>
          <ButtonBlack text='Start your instructor journey' />
        </div>
        <Image src={people} alt={''} />
      </div>
    </section>
  )
}

export const SectionAdvertisement: FC = () => {
  return (
    <section>
      <div>
        <ul>
          <li>
            <h4>250+</h4>
            <span>Courses by our best mentors</span>
          </li>
          <li>
            <h4>100+</h4>
            <span>Experienced mentors</span>
          </li>
          <li>
            <h4>2000+</h4>
            <span>Users learning something new</span>
          </li>
        </ul>
        <ButtonBlack text='See all' />
      </div>
    </section>
  )
}

export const SectionCourses: FC = () => {
  return (
    <section>
      <div>
        <Title text={'Top Courses'} />
        <ProductCard />
      </div>
    </section>
  )
}

export const SectionInstructors: FC = () => {
  return (
    <section>
      <div>
        <CardUser />
      </div>
    </section>
  )
}

export const SectionBecomeAnInstructor: FC = () => {
  return (
    <section>
      <LayoutFlex
        Left={
          <Image src={man} alt={''} />
        }
        Right={
          <div>
            <Title text={'Become an Instructor'} />
            <p>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
            <ButtonBlack text='Start your instructor journey' />
          </div>
        }
      />
    </section>
  )
}

export const SectionСhanges: FC = () => {
  return (
    <div>
      <LayoutFlex
        Left={
          <div>
            <Title text={'Transform your life through education'} />
            <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
            <ButtonBlack text='Checkout courses' />
          </div>
        }
        Right={
          <Image src={man2} alt='' />
        }
      />
    </div>
  )
}

export const HomePage: FC = () => {
  return (
    <div>
      <SectionInfo />
      <SectionAdvertisement />
      <SectionCourses />
      <SectionInstructors />
      <SectionBecomeAnInstructor />
      <SectionСhanges />
    </div>
  )
}

