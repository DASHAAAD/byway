/* eslint-disable react/jsx-key */
import { CardUser } from "@/components/cards/user-card/user-card";
import { ProductCard } from "@/components/cards/product-card/product-card";
import { Title } from "@/components/title/title";
import React, { FC } from "react";

import { ArrayProductCard } from "../../components/cards/product-card/product-card";
import { CoursesList } from "@/components/courses-list/courses-list";
import styles from "./courses-styles.module.css";
import { TitleDefault } from "@/components/title/title-ui.stories";

ArrayProductCard.splice(3);

for (let i = 0; i < 1; i++) {
  const element = ArrayProductCard[i];
  console.log(element);
}
console.log(ArrayProductCard);

export const Courses: FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Title {...TitleDefault.args} text="All courses" />
        <Title text="All courses" />
        <div className={styles.wrapper}>
          <CoursesList />
          <div>
            {ArrayProductCard.map((i) => {
              return <ProductCard />;
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <Title text="Popular Mentors" />
        <CardUser />
      </section>

      <section className={styles.section}>
        <Title text="Popular Courses" />
        <ProductCard />
      </section>
    </div>
  );
};
