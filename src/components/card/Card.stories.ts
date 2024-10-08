import type { StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "default/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
    args:{
        title: 'string',
        name: 'string',
        price: 1
    }
};
