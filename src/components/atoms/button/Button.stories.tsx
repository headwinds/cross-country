import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button-themed';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'design system/atoms/MyButton',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    customStyle: { backgroundColor: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args}>hello</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  customStyle: { backgroundColor: 'lightlblue', border: 'none', padding: 16, borderRadius: 5 },
};

export const Another = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
