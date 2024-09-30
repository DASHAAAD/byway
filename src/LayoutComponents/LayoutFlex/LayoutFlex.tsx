import React, { FunctionComponent, ReactElement, ReactNode } from 'react'


type Props = {
    left: React.ReactNode,
    right: React.ReactNode,
}

export const LayoutFlex: FunctionComponent<Props> = ({
    left: Left,
    right: Right
}) => {
    return (
        <div>
            <div>
                {Left}
            </div>
            {Right}
        </div>
    )
}

