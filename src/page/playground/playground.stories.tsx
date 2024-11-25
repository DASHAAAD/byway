import { Reg } from "./playground";
import { StoryObj } from "@storybook/react";

import { nanoid } from "@reduxjs/toolkit";

export const Meta = {
  title: "PlaygroundTitle",
  component: Reg,
};

type Story = StoryObj<typeof Meta>;

export const PlaygrounS: Story = {
  args: {
    initializeState: [],
    loading: false,
    id: nanoid,
  },
};



