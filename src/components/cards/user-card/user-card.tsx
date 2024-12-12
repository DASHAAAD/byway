import React, { FC} from 'react'
import style from './CardUser.module.css'
interface Type {
    children?:  React.ReactNode
}

export const CardUser:FC<Type> = ({children}) => {
    return (
        <>
            <div className={style.wrapper}>
              {children}
            </div>
        </>
    )
}

