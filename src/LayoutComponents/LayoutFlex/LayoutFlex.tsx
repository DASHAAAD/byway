import React, { FunctionComponent } from 'react'


type Props = {
    Left?: React.ReactNode,
    Right?: React.ReactNode,
    className?: React.CSSProperties
    children?: React.ReactNode
}


export const WrapperFlex: FunctionComponent<Props> = ({
    children
}) => {
    return (
        <div className='flex'>
            {children}
        </div>
    )
}

export const LayoutFlex: FunctionComponent<Props> = ({
    Left,
    Right,
}) => {
    return (
        <>
            <WrapperFlex>
                {Left}
                {Right}
            </WrapperFlex>
        </>
    )
}

