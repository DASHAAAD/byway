import type { StoryObj } from "@storybook/react";
import TextArea from "./textarea";


const meta = {
    title: "default/TextArea",
    component: TextArea,
}

export default meta;
type Story = StoryObj<typeof meta>

export const  DefaultTextArea: Story = {
    args: {
        className: 'ddd',
        title: 'ddd'
    }
}