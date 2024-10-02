import React, { FunctionComponent } from 'react'

export type Props = {
    childrenOne: React.ReactNode;
    childrenTwo: React.ReactNode;
    styles?: React.CSSProperties
}

const TwoColumn: FunctionComponent<Props> = ({
    childrenOne,
    childrenTwo,
    styles
}) => {
    return (
        <div style={styles}>
            <div>
                {childrenOne}
            </div>
            <div>
                {childrenTwo}
            </div>
        </div>
    )
}

export default TwoColumn