import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PillButton from './pill-button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'design system/atoms/button/pill button',
  component: PillButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PillButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PillButton> = args => <PillButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'PillButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'PillButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'PillButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'PillButton',
};
