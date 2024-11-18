import React, { FC } from 'react'
import { NavWrapper } from './NavWrapper'


export const Nav: FC = () => {
    return (
        <NavWrapper>
            <NavWrapper.Nav />
            <NavWrapper.List>
                ssssss
                <NavWrapper.Item>Edit</NavWrapper.Item>
                <NavWrapper.Item>Delete</NavWrapper.Item>
            </NavWrapper.List>
        </NavWrapper>
    )
}
