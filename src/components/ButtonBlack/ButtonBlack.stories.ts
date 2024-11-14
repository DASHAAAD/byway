import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonBlack } from "./ButtonBlack";

const meta = {
  title: "default/ButtonBlack",
  component: ButtonBlack,
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButtonBlack: Story = {
  args: {
    label: "Button",
  },
};

// test

export const FormButton: Story = {
  args: {
    label: "Button",
    width: "620px",
  },
};
