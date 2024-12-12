import type { StoryObj } from "@storybook/react";
import Input from "./input";

const meta = {
  title: "default/FormItem",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaulInput: Story = {
  args: {
    className: 'CLASS FORMITE,',
    title: 'TITLE FORMITEM',
  },
};


