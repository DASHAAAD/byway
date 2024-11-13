import React, { FC } from 'react'

import style from './Title.module.css'

interface Type {
    text: string
}

export const Title:FC<Type> = ({text}) => {
    return (
        <div className={style.title}>{text}</div>
    )
}


