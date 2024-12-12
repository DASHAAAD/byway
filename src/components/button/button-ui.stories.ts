import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
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
  gap: "8px",
  color: "#EDEEF0",
  backgroundColor: "black",
  content: ">",
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
