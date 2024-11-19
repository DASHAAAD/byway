import React, { FC } from 'react'
import { NavWrapper } from './NavWrapper'


export const Nav: FC = () => {
    return (
        <NavWrapper>
            <NavWrapper.Nav>
                Navigation menu item
            </NavWrapper.Nav >
            <NavWrapper.List>
                <NavWrapper.Item>Navigation menu item</NavWrapper.Item>
            </NavWrapper.List>
        </NavWrapper>
    )
}
