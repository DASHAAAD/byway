import React from "react";
import Image from "next/image";
import astrologyImg from "@/image/astrology.png";
import styles from "./categories-card-styles.module.css";

interface AstrologyProps {
  title: string;
  text: string;
}

export const СategoriesСard = ({ title, text }: AstrologyProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <Image src={astrologyImg} alt={""} />
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
