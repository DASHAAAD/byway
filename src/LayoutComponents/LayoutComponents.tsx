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
            <section className={clsx(styles.twoColumn, styles.section)}>
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
            <section className={clsx(styles.twoColumn, styles.section)}>
                <Item
                    title={'Но также колонкой может быть и фотография'}
                    text={'Как в примере справа'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={clsx(styles.wrapperItem, styles.height)}
                />
                <ImageItem />
            </section>
            <section className={styles.section}>
                <Item
                    title={'Это - шаблон секции из одной колонки'}
                    text={'Аналогично, заголовок второго уровня и контент'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={clsx(styles.wrapperItem, styles.width)}
                />
            </section>
            <section className={clsx(styles.grid, styles.section)}>
                <Item
                    title={'Ещё есть вариант с неравными колонками'}
                    text={'Одна меньше другой ровно в два раза'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={styles.wrapperItem}
                />
                <Item
                    title={'Большая колонка'}
                    text={'Растёт до бесконечности'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={clsx(styles.wrapperItem, styles.width)}
                />
            </section>
            <section className={styles.section}>
                <Title title={'Эта секция скроллится горизонтально'} className={styles.title} />
                <div className={styles.horizontalScrolling}>
                    <Item
                        title={'Пример карточки'}
                        text={'В этой секции могут быть плюс-минус любые компоненты, использование конкретного набора не подразумевается'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'Компоненты должны быть фиксированного размера, поскольку они не смогут адаптироваться под бесконечный контейнер'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <Title title={'Эта секция переносит карточки'} className={styles.title} />
                <div className={styles.gridColumn}>
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                    <Item
                        title={'Пример карточки'}
                        text={'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.'}
                        classNameTitle={styles.titleItem}
                        classNameText={styles.textItem}
                        classNameWrapper={clsx(styles.wrapperItem, styles.widthHeight)}
                    />
                </div>
            </section>
            <section className={clsx(styles.section, styles.flex)}>
                <Title title={'Рядом с заголовком можно поставить кнопку'} className={styles.title} />
                <button className={styles.button}>Кнопка</button>
            </section>
            <section className={styles.section}>
                <Item
                    title={'Секция не обязательно должна быть залита цветом'}
                    text={'И не обязательно должна иметь отступы В макете это для видимости, для примера'}
                    classNameTitle={styles.titleItem}
                    classNameText={styles.textItem}
                    classNameWrapper={clsx(styles.wrapperItem, styles.width)}
                />
            </section>
        </div>
    )
}

export default LayoutComponents