import React, { FunctionComponent } from 'react'
import { ReactNode, CSSProperties } from 'react';
import styles from '../../components/buttonBlack/buttonBlack.module.css'

interface ButtonBlackProps {
    text: string
    style?: React.CSSProperties
}

const ButtonBlack: FunctionComponent<ButtonBlackProps> = (props) => {
    return (
        <button style={style} className={styles.button} >{props.text}</button>
    )
}

export default ButtonBlack