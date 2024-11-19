import { Nav } from "./Nav";
import { StoryObj } from "@storybook/react";

const meta = {
    title: 'default/Nav',
    component: Nav
}

export default meta 
type Story = StoryObj<typeof meta>

export const DefaultNav: Story = {
    args: {

    }
}