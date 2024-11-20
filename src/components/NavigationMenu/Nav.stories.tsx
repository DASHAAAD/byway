import React from 'react';

import { NavWrapper, TypeWrapper } from './NavWrapper';
import { NavList } from './NavWrapper';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'NavWrapper',
    component: NavWrapper,
}

export default meta
type Story = StoryObj<typeof meta>


export const Default: Story = {
    args: {
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
    }
}

export const ListEditProfile = [
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

export const MenuEditProfile:Story = {
    args: {
        children: (
            <>
                <NavWrapper.Nav>Profile</NavWrapper.Nav>
                <NavWrapper.List>
                    {ListEditProfile.map(item => (
                        <NavWrapper.Item key={item.id}>{item.text}</NavWrapper.Item>
                    ))}
                </NavWrapper.List>
            </>
        ),
    }
}