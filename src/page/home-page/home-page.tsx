import ButtonBlack from "@/components/button/button";
import { Title } from "@/components/title/title";
import React, { FC } from "react";

import Image from "next/image";
import people from "../../image/people.png";
import man from "../../image/man.png";
import man2 from "../../image/man2.png";

import style from "./HomePage.module.css";

import { ProductCard } from "@/components/cards/product-card/product-card";
import { CardUser } from "@/components/cards/user-card/user-card";
import { AstrologyCards } from "@/components/cards/categories-card/categories-card";


export const SectionInfo: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <div className={style.width}>
          <Title
            text="Unlock Your Potential with Byway"
            className={style.title}
          />
          <p className={style.text}>
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and were
            here to guide you on your journey to success.{" "}
          </p>
          <ButtonBlack
            className={style.button}
            text="Start your instructor journey"
          />
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
  );
};

export const SectionCategories: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <Title text="Top Categories" className={style.title} />
        <ButtonBlack text="See all" className={style.buttonSmall}/>
      </div>
      <div className={style.flex}>
        <AstrologyCards title="Astrology" text="11 Courses" />
        <AstrologyCards title="Development" text="12 Courses" />
        <AstrologyCards title="Marketing" text="12 Courses" />
        <AstrologyCards title="Physics" text="14 Courses" />
        </div>
    </section>
  );
};

export const SectionCourses: FC = () => {
  return (
    <section className={style.section}>
      <div>
      <div className={style.flex}>
        <Title text="Top Courses" className={style.title} />
        <ButtonBlack text="See all" className={style.buttonSmall}/>
      </div>
        <ProductCard />
      </div>
    </section>
  );
};

// export const SectionInstructors: FC = () => {
//   return (
//     <section className={style.section}>
//       <div>
//       <div className={style.flex}>
//         <Title text="Top Instructors" className={style.title} />
//         <ButtonBlack text="See all" className={style.buttonSmall}/>
//       </div>
//         <CardUser />
//       </div>
//     </section>
//   );
// };

export const SectionBecomeAnInstructor: FC = () => {
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <Image src={man} alt={""} />
        <div className={style.width}>
          <Title className={style.title} text="Become an Instructor" />
          <p className={style.text}>
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <ButtonBlack className={style.button} text="Start your instructor journey" />
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
          <Title className={style.title} text="Transform your life through education" />
          <p className={style.text}>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <ButtonBlack className={style.button} text="Checkout courses" />
        </div>
        <Image src={man2} alt="" />
      </div>
    </section>
  );
};

export const HomePage: FC = () => {
  return (
    <div className={style.container}>
      <SectionInfo />
      <SectionAdvertisement />
      <SectionCategories />
      <SectionCourses />
      {/* <SectionInstructors /> */}
      <SectionBecomeAnInstructor />
      <SectionСhanges />
    </div>
  );
};
