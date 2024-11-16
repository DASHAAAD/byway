import type { StoryObj } from "@storybook/react";
import { CardUser } from "./CardUser";

const meta = {
    title: 'default/CardUser',
    component: CardUser,
}

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
    
    },
  };