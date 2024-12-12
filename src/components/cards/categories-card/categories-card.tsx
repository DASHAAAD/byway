import React from "react";
import Image from "next/image";
import astrology from "../../image/astrology.png";
import styles from "./AstrologyCards.module.css";

interface AstrologyProps {
  title: string;
  text: string;
}

export const AstrologyCards = ({ title, text }: AstrologyProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <Image src={astrology} alt={""} />
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
