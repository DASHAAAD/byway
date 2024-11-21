import React, { FC } from 'react'

import style from './Title.module.css'

interface Type {
    text: string,
    className: string
}

export const Title: FC<Type> = ({ text, className }) => {
    return (
        <div className={className}>{text}</div>
    )
}


