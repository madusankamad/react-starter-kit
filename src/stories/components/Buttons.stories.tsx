import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../common/button';
import { ThemeForStorybook } from '../../contexts/themeContext';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeForStorybook>
    <Button {...args}>Button {args.color}</Button>
  </ThemeForStorybook>
);

export const Primary = Template.bind({});
