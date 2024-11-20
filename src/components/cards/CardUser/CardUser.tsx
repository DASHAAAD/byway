import React, { FC, ReactNode } from 'react'

import { TypeProps } from './CardUserSlice'
import style from './CardUser.module.css'
import Image from "next/image";
import man from '../../../image/categoryIcon.png'
import { ArrayUserProps } from './CardUser.stories'



export const CardUser: FC<TypeProps> = () => {
    return (
        <>
            <div className={style.wrapper}>
                {ArrayUserProps.map(Item => {
                    return (
                        <div className={style.container} key={Item.id}>
                            <Image src={man} alt={""} />
                            <h2 className={style.title}>{Item.nameUser}</h2>
                            <p className={style.text}>{Item.text}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

