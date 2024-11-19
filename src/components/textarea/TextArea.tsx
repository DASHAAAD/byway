import React from 'react'

interface Type  {
    className: string,
    title: string
}

const TextArea: React.FC<Type> = ({
    className,
    title,
    ...props

}) => (
    <textarea
        title={title}
        {...props}
        className={className}
    />
)

export default TextArea