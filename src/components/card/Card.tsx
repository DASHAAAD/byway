import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { cardItems, CardProps } from './card-props'
import card from '../../image/card.png'

import styles from './card.module.css'

const Card: FunctionComponent<CardProps> = function () {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.img} src={card} alt={''} />
            <div className={styles.info}>
                <h2 className={styles.title}>{cardItems.title}</h2>
                <p className={styles.text}>{cardItems.name}</p>
                <span className={styles.price}>{cardItems.price}</span>
            </div>
        </div>
    )
}

export default Card
