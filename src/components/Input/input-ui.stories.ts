"use client";
import type { StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "default/FormItem",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaulInput: Story = {
  args: {
    className: "CLASS FORMITE,",
    title: "TITLE FORMITEM",
  },
};
