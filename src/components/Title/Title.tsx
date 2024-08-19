import React, { FunctionComponent } from 'react'
import styles from '../../components/Title/Title.module.css'

interface TitleProps {
    text: string
}

export const Title: FunctionComponent<TitleProps> = (props) => {
    return (
        <h2 className={styles.title}>{props.text}</h2>
    )
}
