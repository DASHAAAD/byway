import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import styled, { Interpolation } from "styled-components";

type Props = {
    Left?: React.ReactNode,
    Right?: React.ReactNode,
    children?: React.ReactNode,
    className?: string
}


export const WrapperFlex = ({
    children,
    className
}: Props) => {
    return (
        <div className={className} >
            {children}
        </div>
    )
}

export const LayoutFlex: FunctionComponent<Props> = ({
    Left,
    Right,
    children,
    className=''

}) => {
    return (

        <WrapperFlex className={className}>
            {Left}
            {Right}
            {children}
        </WrapperFlex>

    )
}

