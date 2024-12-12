import type { StoryObj } from "@storybook/react";
import { ProductCard } from "./product-card";

const meta = {
  title: "default/ProductCard",
  component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProductCard: Story = {
  args: {
    id: "string",
    placeholder: "string",
  },
};
