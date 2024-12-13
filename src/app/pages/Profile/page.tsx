"use client";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./profile-styles.module.css";

import { Container } from "@/components/Container";
import { Title } from "@/components/Title/Title";
import { List } from "../edit-profile/edit-profile-list";

import Image from "next/image";
import user from "@/image/avatar.png";
import { ProductCard } from "@/components/cards/product-card/product-card";
import { ReviewsCard } from "@/components/cards/reviews-card/reviews-card";

interface Type {
  TextSlice: {
    name: string;
    headline: string;
    language: string;
    LinksOne: string;
    LinkstWO: string;
    LinksThree: string;
  };
}

const Profile: FC = () => {
  const { name, headline, language, LinksOne, LinkstWO, LinksThree } =
    useSelector((state: Type) => state.TextSlice);

  return (
    <Container>
      <Title className={styles.name} text={name} />
      <section className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.text}>{headline}</p>
          <p className={styles.text}>About {name}</p>
          <p className={styles.text}>{language}</p>
          <div className={styles.info}>
            <p className={styles.text}>
              Ronald Richard is a highly skilled UX/UI Designer with over a
              decade of experience in crafting user-centric digital solutions.
              With a background in graphic design and a keen eye for detail,
              Ronald specializes in creating intuitive interfaces that delight
              users and drive business results.
            </p>
            <ul className={styles.list}>
              {List.map((item, nanoid: number) => {
                <h4>Areas of Expertise</h4>;
                return (
                  <li className={styles.listItem} key={nanoid}>
                    <p className={styles.listText}>{item.text}</p>
                  </li>
                );
              })}
            </ul>
            <p className={styles.text}>
              Professional ExperienceRonald Richard has an extensive
              professional background in UX/UI design, having worked with
              renowned companies such as [Company Name] and [Company Name]. His
              portfolio includes a diverse range of projects spanning web
              applications, mobile apps, and e-commerce platforms.
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <Image className={styles.img} src={user} alt={""} />
          <div className={styles.links}>
            <a className={styles.link} href="#">
              {LinksOne}
            </a>
            <a className={styles.link} href="#">
              {LinkstWO}
            </a>
            <a className={styles.link} href="#">
              {LinksThree}
            </a>
          </div>
        </div>
      </section>

      <section>
        <Title className={styles.subTitle} text="Courses by Ronald Richards" />
        <ProductCard />
      </section>

      <section>
        <Title className={styles.subTitle} text="Courses Reviews" />
        <ReviewsCard />
      </section>
    </Container>
  );
};

export default Profile