import React, { FC, ReactNode } from 'react'

import { TypeProps } from './CardUserSlice'


export const CardUser: FC<TypeProps> = ({
    children
}) => {
    return (
        <>
            {children}
        </>
    )
}

