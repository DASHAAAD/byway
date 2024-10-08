import type { StoryObj } from "@storybook/react";
import CategoryCard from "./CategoryCard";

const meta = {
  title: "default/CategoryCard",
  component: CategoryCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCategoryCard: Story = {
  args: {
    title: "string",
    text: " string",
  },
};
