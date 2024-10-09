import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import styled, { Interpolation } from "styled-components";

export type TextProps = {
    children: React.ReactNode,
    styles?: Interpolation<React.CSSProperties>,
    className?: string
};

//layout component 
//one column 

export const LayoutColumn = ({
    children,
    className=''
}: TextProps): React.ReactElement<ReactNode> => (
    <div className={className}>
        {children}
    </div>
)

//text layout column 

export const LayoutElement: FunctionComponent = () => {
    return (
        <LayoutColumn styles={{ height: "10px", backgroundColor: 'red' }}>
            {<>привет</>}
        </LayoutColumn>
    )
}


export default LayoutColumn
