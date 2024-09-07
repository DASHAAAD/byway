import React, { FunctionComponent } from 'react'

type Props = {
    title: string,
    className: string
}

const Title: FunctionComponent<Props> = ({
    title,
    className
}) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}

export default Title