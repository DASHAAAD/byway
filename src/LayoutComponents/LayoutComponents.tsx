import React, { FunctionComponent } from 'react'

import styles from '../../src/LayoutComponents/LayoutComponents.module.css'
import Title from './components/Title'
import Item from './components/Item'
import ImageItem from './components/Image'

import { clsx } from 'clsx';




const LayoutComponents: FunctionComponent = (props) => {
    return (
        <div>
            <Title
                title='Это - заголовок первого уровня'
                className={styles.title} />
            <Title
                title='Да, по новым стандартам HTML семантики их может быть несколько на странице'
                className={styles.title} />
            <section className={styles.twoColumn}>
                <Item
                    title={'Это - шаблон секции из двух колонок'}
                    text={'Колонки просто занимают всё свободное пространство и делят пополам'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={styles.wrapperItem}
                />
                <Item
                    title={'Колонка обычно состоит из заголовка'}
                    text={'И последующего текста'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={styles.wrapperItem} />
            </section>
            <section className={styles.twoColumn}>
                <Item
                    title={'Но также колонкой может быть и фотография'}
                    text={'Как в примере справа'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={clsx(styles.wrapperItem, styles.height)}
                />
                <ImageItem />
            </section>
        </div>
    )
}

export default LayoutComponents