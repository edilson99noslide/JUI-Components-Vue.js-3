import type { Meta, StoryFn } from '@storybook/vue3';
import JUIButton from '@/components/JUIButton.vue';

const meta: Meta<typeof JUIButton> = {
  title: 'Componentes/JUIButton',
  component: JUIButton,
  argTypes: {
    label: { control: 'text' },
    bgColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary']
    }
  },
};

export default meta;

type Story = StoryFn<typeof JUIButton>;

export const Default: Story = (args) => ({
  components: { JUIButton },
  setup() {
    return { args };
  },
  template: '<JUIButton v-bind="args">{{ args.label }}</JUIButton>',
});

Default.args = {
  label: 'Clique aqui',
};
