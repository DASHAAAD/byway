/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, ReactNode } from 'react'

import style from '../CardUser/CardUser.module.css'

import man from '../../../image/categoryIcon.png'
import Image from 'next/image'

import { Type } from '@/components/coursesList/coursesListSlice'

export const ArrayUserProps = [
    {
        id: 'one',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание',
    },

    {
        id: 'two',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    },

    {
        id: 'two',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    },

    {
        id: 'two',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    }
]

export const CardUser: FC<Type> = ({
}) => {
    return (
        <div className={style.wrapper}>
            {ArrayUserProps.map(Item => {
                return (
                    <div className={style.container} key={Item.id}>
                        <Image className={style.img} src={Item.imgUrl} alt={Item.alt} />
                        <h2 className={style.title}>{Item.nameUser}</h2>
                        <p className={style.text}>{Item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

