import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { AstrologyProps, astrologyItems } from './AstrologyCards-props'
import astrology from '../../image/astrology.png'
import styles from './AstrologyCards.module.css'

export const AstrologyCards: FunctionComponent<AstrologyProps> = function () {
    return (
        <div className={styles.wrapper}>
            <Image className={styles.image} src={astrology} alt={''} />
            <h2 className={styles.title}>{astrologyItems.title}</h2>
            <p className={styles.text}>{astrologyItems.title}</p>
        </div>
    )
}
