"use client";
import React from "react";
import styles from "./reviews-card-styles.module.css";

import Image from "next/image";
import img from "@/image/avatar (1).png";
import svg from "@/image/ratings.png";

export const CardReviewsArray = [
  {
    id: "one",
    name: "Mark Doe",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    data: "22nd March, 2024",
    svg: svg,
    imgUrl: img,
  },
  {
    id: "two",
    name: "Mark Doe",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    data: "22nd March, 2024",
    svg: svg,
    imgUrl: img,
  },
  {
    id: "three",
    name: "Mark Doe",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
    data: "22nd March, 2024",
    svg: svg,
    imgUrl: img,
  },
];

export const ReviewsCard = () => {
  return (
    <div>
      {CardReviewsArray.map((item) => {
        return (
          <div className={styles.wrapper} key={item.id}>
            <div className={styles.card}>
              <Image className={styles.img} src={item.imgUrl} alt={""} />
              <h3 className={styles.title}>{item.name}</h3>
            </div>

            <div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.bottom}>
                <Image src={item.svg} alt={""} />
                <p className={styles.data}>{item.data}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
