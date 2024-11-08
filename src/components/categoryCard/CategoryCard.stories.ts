import type { Meta, StoryObj, Decorator } from "@storybook/react";
import CategoryCard from "./CategoryCard";
import style from "styled-jsx/style";

// const meta = {
//   title: "default/CategoryCard",
//   component: CategoryCard,
//   decorators: [
//     (Story) => (
//       <div style={{ margin: '3em' }}>
//        jjj
//         <Story />
//       </div>
//     ),
// };

const meta: Meta<typeof CategoryCard> = {
  component: CategoryCard,
  decorators: [(CategoryCard) => CategoryCard()],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCategoryCard: Story = {
  args: {
    title: "string",
    text: " string",
  },
};
