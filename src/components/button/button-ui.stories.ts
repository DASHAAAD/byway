import React from 'react';

import type {  StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./button";

const meta = {
  title: "default/Button",
  component: Button,
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// общие стили
const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 24px",
  height: '48px',
  gap: "8px",
  color: "#EDEEF0",
  backgroundColor: "black",
  borderRadius: '24px'
};

export const ButtonSmall: Story = {
  args: {
    style: {
      ...styles,
      width: "135px",
    },
    label: "Button",
  },
};

export const ButtonMedium: Story = {
  args: {
    style: {
      ...styles,
      width: "314px",
    },
    label: "Button",
  },
};

export const ButtonLarge: Story = {
  args: {
    style: {
      ...styles,
      width: "620px",
    },
    label: "Button",
  },
};
