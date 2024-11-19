import type { StoryObj } from "@storybook/react";
import FormItem from "./FormItem";

const meta = {
  title: "default/FormItem",
  component: FormItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormItem: Story = {
  args: {
    className: 'CLASS FORMITE,',
    title: 'TITLE FORMITEM',
  },
};
