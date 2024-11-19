import type { StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

const meta = {
    title: "default/ProductCard",
    component: ProductCard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProductCard:Story = {
    args: {
        
    }
}

