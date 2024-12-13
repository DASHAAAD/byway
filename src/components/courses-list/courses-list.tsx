"use client";
import React, { FC } from "react";

import style from "./courses-list-styles.module.css";

export const ArrCourses = [
  {
    id: "one",
    placeholder: "Sort by",
  },
  {
    id: "one",
    placeholder: "Sort by",
  },
  {
    id: "one",
    placeholder: "Sort by",
  },
  {
    id: "one",
    placeholder: "Sort by",
  },
];

export const CoursesList: FC = () => {
  return (
    <div>
      {ArrCourses.map((item) => {
        return (
          <a className={style.item} key={item.id} href="#">
            <input type="text" placeholder={item.placeholder} />
            <svg
              className={style.svg}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="#1C2024"
                stroke-opacity="0.92"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        );
      })}
    </div>
  );
};
