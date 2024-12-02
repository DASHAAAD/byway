import { MenuEditProfile } from "@/components/NavigationMenu/Nav.stories";
import { NavWrapper } from "@/components/NavigationMenu/NavWrapper";
import { TextSlice } from "@/slice/TextSlice";
import React, { FC } from "react";
import { useSelector } from "react-redux";

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

export const Playground:FC = () => {
  const { name, headline, language, LinksOne, LinkstWO, LinksThree } = useSelector((state: Type) => state.TextSlice);
  return (
    <div style={{width: '100px', height: '100px', backgroundColor: 'black'}}>
      <div style={{fontSize: '40px',color: 'red'}}>
        {name}
      </div>
      <div style={{fontSize: '40px',color: 'red'}}>
        {headline}
      </div>
    </div>
  );
};
