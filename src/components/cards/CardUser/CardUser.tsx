/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { FC, ReactNode } from 'react'

import man from '../../../image/categoryIcon.png'
import Image from 'next/image'


export const ArrayUserProps = [
    {
        id: 'one',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание',
        src: man
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

interface TypeProps {
    id?: string
    nameUser?: string
    text?: string
    map?: ReactNode;
    image?: HTMLImageElement
}

export interface TypeImgs {
    imgUrl?: string
    src?: string
}

interface Type extends TypeProps, TypeImgs {
    map?: ReactNode;
    image?: HTMLImageElement

}

export const CardUser: FC<Type> = ({
}) => {
    return (
        <div>
            {ArrayUserProps.map(Item => {
                return (
                    <div key={Item.id}>
                        <Image src={Item.imgUrl} alt={Item.alt} />
                        <div>
                            <h2>{Item.nameUser}</h2>
                            <p>{Item.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
