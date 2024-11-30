import type { Meta, StoryObj } from "@storybook/react";
import ButtonWithArrow from "@/app/components/ButtonWithArrow";

const meta: Meta<typeof ButtonWithArrow> = {
  title: "Components/ButtonWithArrow",
  component: ButtonWithArrow,
  tags: ['autodocs'],
  argTypes: {
    label: { control: "text" },
    variant: { control: "radio", options: ["default", "services"] },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonWithArrow>;

export const Default: Story = {
  args: {
    label: "Vulputate Velit",
    variant: "default",
  },
};

export const Services: Story = {
  args: {
    label: "Services Button",
    variant: "services",
  },
};
