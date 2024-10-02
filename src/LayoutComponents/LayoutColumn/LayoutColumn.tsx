import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components';

export type TextProps = {
    children: React.ReactNode;
    styles?: React.CSSProperties;
};

const Component = styled.p<TextProps>`
  color: red;
`;


//layout component 
//one column 

export const LayoutColumn = ({
    children,
    styles,
}: TextProps): React.ReactElement<ReactNode> => (
    <Component styles={styles}>
        {children}
    </Component>
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
