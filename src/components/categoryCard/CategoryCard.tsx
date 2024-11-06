import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import icon from '../../image/categoryIcon.png'

import styles from './CategoryCard.module.css'

import { useAppSelector} from '../../app/hooks';

// export const cardItems: categoryProps = {
//   title: 'Ronald Richards',
//   text: 'UI/UX Designer'
// }

// export type categoryProps = {
//   title: string,
//   text: string
// }

const CategoryCard: FunctionComponent = function () {

  const count = useAppSelector((state) => state.CategoryCard);

  return (
    <div className={styles.wrapper}>
      <Image className={styles.img} src={icon} alt={''} />
      <h2 className={styles.title}>{count.title}</h2>
      <p className={styles.text}>{count.text}</p>
    </div>
  )
}

export default CategoryCard