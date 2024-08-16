import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { cardItems, categoryProps } from './CategoryCard-props'
import icon from '../../image/categoryIcon.png'

import styles from './CategoryCard.module.css'

const CategoryCard: FunctionComponent<categoryProps> = function () {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.img} src={icon} alt={''} />
      <h2 className={styles.title}>{cardItems.title}</h2>
      <p className={styles.text}>{cardItems.text}</p>
    </div>
  )
}

export default CategoryCard