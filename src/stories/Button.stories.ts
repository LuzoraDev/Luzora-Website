import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '@/components/ui/Button.vue';
import RemoveFolder from '@/components/icons/common/RemoveFolder.vue';
import '@/assets/base.css';
import '@/assets/main.css';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tetiary'],
    },
    theme: {
      control: 'select',
      options: ['main', 'brand', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
    icon: {
      control: 'object',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    variant: 'primary',
    theme: 'main',
    size: 'md',
    disabled: false,
    text: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    theme: 'main',
    text: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    theme: 'main',
    text: 'Secondary Button',
  },
};

export const Tetiary: Story = {
  args: {
    variant: 'tetiary',
    theme: 'main',
    text: 'Tetiary Button',
  },
};

export const BrandPrimary: Story = {
  args: {
    variant: 'primary',
    theme: 'brand',
    text: 'Brand Primary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'primary',
    theme: 'destructive',
    text: 'Destructive Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    text: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    text: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'With Icon',
    icon: {
      present: true,
      position: 'left',
      component: RemoveFolder,
    },
  },
};

export const IconRight: Story = {
  args: {
    text: 'Icon Right',
    icon: {
      present: true,
      position: 'right',
      component: RemoveFolder,
    },
  },
};

export const SlotContent: Story = {
  render: () => ({
    components: { Button },
    template: '<Button>Custom Slot Content</Button>',
  }),
};
