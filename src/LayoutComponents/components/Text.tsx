import React, { FunctionComponent } from 'react'

type Props = {
    text : string,
    className: string
}

const Text:FunctionComponent<Props> = ({
    text, 
    className
}) => {
    return (
        <div className={className}>{text}</div>
    )
}

export default Text