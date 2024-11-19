import type { StoryObj } from "@storybook/react";
import { CardUser } from "./CardUser";

import { userSlice } from "./CardUserSlice";

const meta = {
    title: 'default/CardUser',
    component: CardUser,
}

export default meta;
type Story = StoryObj<typeof meta>

export const DefaultCardUser: Story = {
    args: {
        id: 'string',
        placeholder: 'string'
    },
  };