import React from 'react';

import { NavWrapper, TypeWrapper } from './NavWrapper';
import { NavList } from './NavWrapper';
import { Meta } from '@storybook/react';

export default {
  title: 'NavWrapper',
  component: NavWrapper,
} as Meta;


const Template: Story<TypeWrapper> = (args) => <NavWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <NavWrapper.Nav>Toggle Menu</NavWrapper.Nav>
      <NavWrapper.List>
        {NavList.map(item => (
          <NavWrapper.Item key={item.id}>{item.text}</NavWrapper.Item>
        ))}
      </NavWrapper.List>
    </>
  ),
};



export const NavListTwo = [
    {
        id: 'one',
        text: 'Courses'
    },
    {
        id: 'two',
        text: 'Purchases'
    },
    {
        id: 'three',
        text: 'Shopping cart'
    },
    {
        id: 'four',
        text: 'Wishlist'
    },
    {
        id: 'five',
        text: 'Log out'
    }
]

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  children: (
    <>
      <NavWrapper.Nav>Profile</NavWrapper.Nav>
      <NavWrapper.List>
        {NavListTwo.map(item => (
          <NavWrapper.Item key={item.id}>{item.text}</NavWrapper.Item>
        ))}
      </NavWrapper.List>
    </>
  ),
  value: true,
};

