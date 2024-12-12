import React, { FC } from "react";

import Image from "next/image";
import people from "../../image/people.png";
import man from "../../image/man.png";
import man2 from "../../image/man2.png";

import style from "./home-page-styles.module.css";

import { ProductCard } from "@/components/cards/product-card/product-card";
import { CardUser } from "@/components/cards/user-card/user-card";
import { СategoriesСard } from "@/components/cards/categories-card/categories-card";

import { Container } from "@/components/Container";
import { Title } from "@/components/title/title";
import {
  TitleDefault,
  TitleNumbers,
} from "@/components/title/title-ui.stories";
import Button from "@/components/button/button";
import {
  ButtonMedium,
  ButtonSmall,
} from "@/components/button/button-ui.stories";
import { Default } from "@/components/cards/user-card/user-card-ui.stories";

export const SectionInfo: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <div className={style.width}>
          <Title
            className={style.mb20}
            {...TitleDefault.args}
            text="Unlock Your Potential with Byway"
          />
          <p className={style.mb24}>
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and were
            here to guide you on your journey to success.{" "}
          </p>
          <Button {...ButtonMedium.args} text="Start your instructor journey" />
        </div>
        <Image src={people} alt={""} />
      </div>
    </section>
  );
};

export const SectionAdvertisement: FC = () => {
  return (
    <section className={style.section}>
      <div>
        <ul className={style.flex}>
          <li>
            <Title {...TitleNumbers.args} text="250+" className={style.mb8} />
            <span className={style.textSpan}>Courses by our best mentors</span>
          </li>
          <li>
            <Title {...TitleNumbers.args} text="100+" className={style.mb8} />
            <span className={style.textSpan}>Experienced mentors</span>
          </li>
          <li>
            <Title {...TitleNumbers.args} text="2000+" className={style.mb8} />
            <span className={style.textSpan}>Users learning something new</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export const SectionCategories: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <Title
          className={style.mb20}
          {...TitleDefault.args}
          text="Top Categories"
        />
        <Button {...ButtonSmall.args} text="See all" />
      </div>
      <div className={style.flex}>
        <СategoriesСard title="Astrology" text="11 Courses" />
        <СategoriesСard title="Development" text="12 Courses" />
        <СategoriesСard title="Marketing" text="12 Courses" />
        <СategoriesСard title="Physics" text="14 Courses" />
      </div>
    </section>
  );
};

export const SectionCourses: FC = () => {
  return (
    <section className={style.section}>
      <div>
        <div className={style.flex}>
          <Title
            className={style.mb20}
            {...TitleDefault.args}
            text="Top Courses"
          />
          <Button {...ButtonSmall.args} text="See all" />
        </div>
        <ProductCard />
      </div>
    </section>
  );
};

export const TopInstructors: FC = () => {
  return (
    <section className={style.section}>
      <div>
        <div className={style.flex}>
          <Title
            className={style.mb20}
            {...TitleDefault.args}
            text="Top Instructors"
          />
          <Button {...ButtonSmall.args} text="See all" />
        </div>
        <CardUser {...Default.args} />
      </div>
    </section>
  );
};

export const SectionBecomeAnInstructor: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <Image src={man} alt={""} />
        <div className={style.width}>
          <Title
            className={style.mb20}
            {...TitleDefault.args}
            text="Become an Instructor"
          />
          <p className={style.text}>
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <Button {...ButtonMedium.args} text="Start your instructor journey" />
        </div>
      </div>
    </section>
  );
};

export const SectionСhanges: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <div className={style.width}>
          <Title
            className={style.mb20}
            {...TitleDefault.args}
            text="Transform your life through education"
          />
          <p className={style.text}>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <Button {...ButtonMedium.args} text="Checkout courses" />
        </div>
        <Image src={man2} alt="" />
      </div>
    </section>
  );
};

export const HomePage: FC = () => {
  return (
    <Container>
      <SectionInfo />
      <SectionAdvertisement />
      <SectionCategories />
      <SectionCourses />
      <TopInstructors />
      <SectionBecomeAnInstructor />
      <SectionСhanges />
    </Container>
  );
};
