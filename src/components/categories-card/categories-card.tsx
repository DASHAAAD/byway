import React from "react";
import Image from "next/image";
import astrology from "../../image/astrology.png";

interface СategoriesСardProps {
  title: string;
  text: string;
}

export const СategoriesСard = ({ title, text }: СategoriesСardProps) => {
  return (
    <div >
      <div>
        <Image src={astrology} alt={""} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
