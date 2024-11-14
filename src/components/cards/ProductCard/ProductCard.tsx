import React, { FC, ReactNode } from 'react'
import { TypeProps, TypeImgs } from '../CardUser/CardUser'

import style from './ProductCard.module.css'

import Image from 'next/image'
import img from '../../../image/card.png'

const ArrayProductCard = [
    {
        id: 'one',
        title: 'Beginner’s Guide to Design',
        text: 'By Ronald Richards',
        price: '$149.9',
        imgUrl: img
    },
    {
        id: 'one',
        title: 'Beginner’s Guide to Design',
        text: 'By Ronald Richards',
        price: '$149.9',
        imgUrl: img
    },
    {
        id: 'one',
        title: 'Beginner’s Guide to Design',
        text: 'By Ronald Richards',
        price: '$149.9',
        imgUrl: img
    },
    {
        id: 'one',
        title: 'Beginner’s Guide to Design',
        text: 'By Ronald Richards',
        price: '$149.9',
        imgUrl: img
    }
]

interface PropsText {
    title?: string,
    price?: string
}

interface Type extends TypeProps, TypeImgs, PropsText {
    map?: ReactNode;
    image?: HTMLImageElement
}

export const ProductCard: FC<Type> = () => {
    return (
        <div>
            {ArrayProductCard.map(item => {
                return (
                    <div key={item.id}>
                        <Image src={item.imgUrl} alt={''} />
                        <div className={style.info}>
                            <h4 className={style.title}>{item.title}</h4>
                            <p className={style.text}>{item.text}</p>
                            <p className={style.price}>{item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
