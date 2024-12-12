import React, { FC } from "react";

import style from "./product-card-styles.module.css";

import Image from "next/image";
import img from "../../../image/card.png";
import { Type } from "@/components/courses-list/courses-list-slice";

export const ArrayProductCard = [
  {
    id: "one",
    title: "Beginner’s Guide to Design",
    text: "By Ronald Richards",
    price: "$149.9",
    imgUrl: img,
  },
  {
    id: "two",
    title: "Beginner’s Guide to Design",
    text: "By Ronald Richards",
    price: "$149.9",
    imgUrl: img,
  },
  {
    id: "three",
    title: "Beginner’s Guide to Design",
    text: "By Ronald Richards",
    price: "$149.9",
    imgUrl: img,
  },
  {
    id: "four",
    title: "Beginner’s Guide to Design",
    text: "By Ronald Richards",
    price: "$149.9",
    imgUrl: img,
  },
];

export const ProductCard: FC<Type> = () => {
  return (
    <div className={style.wrapper}>
      {ArrayProductCard.map((item) => {
        return (
          <div className={style.item} key={item.id}>
            <Image className={style.img} src={item.imgUrl} alt={""} />
            <div className={style.info}>
              <h4 className={style.title}>{item.title}</h4>
              <p className={style.text}>{item.text}</p>
              <p className={style.price}>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
