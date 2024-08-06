import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import './CardProps'
import card from '../../image/card.png'

import styles from './card.module.css'

const Card: FunctionComponent<cardProps> = function () {
    return (
        <div className={styles.wrapper}>
           {cardItems.cover}
            <Image
                src={card} alt={''} />
            <div className={styles.info}>
                <h2 className={styles.title}>{cardItems.title}</h2>
                <p className={styles.text}>{cardItems.name}</p>
                <span className={styles.price}>{cardItems.price}</span>
            </div>
        </div>
    )
}

export default Card