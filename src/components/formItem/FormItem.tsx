import React from 'react'
import clsx from 'clsx'

interface InputProps extends React.HTMLProps<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({
    className,
    title,
    ...props

}) => (
    <input
        title={title}
        {...props}
        className={className}
    />
)

export default Input

