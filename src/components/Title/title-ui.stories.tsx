"use client";
import React from "react";
import type { StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = {
  title: "default/Title",
  component: Title,
};

export default meta;
type Story = StoryObj<typeof meta>;

// общие стили
const stylesTitle: React.CSSProperties = {
  fontFamily: "Fira Sans Condensed",
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "40px",
  lineHeight: "48px",
  color: "rgba(28, 32, 36, 0.92)",
};

export const TitleDefault: Story = {
  args: {
    style: {
      ...stylesTitle,
    },
  },
};

const stylesTitleNumbers: React.CSSProperties = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "32px",
  color: "#0F172A",
};

export const TitleNumbers: Story = {
  args: {
    style: {
      ...stylesTitleNumbers,
    },
  },
};
