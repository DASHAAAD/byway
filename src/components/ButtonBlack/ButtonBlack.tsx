import React, { FunctionComponent } from 'react'
import { ReactNode, CSSProperties } from 'react';
import styles from '../../components/buttonBlack/buttonBlack.module.css'

interface ButtonBlackProps {
    text: string
    style?: React.CSSProperties
    
}

const onClickButton = () => {
    return (
        console.log('типизация кнопки')
    )
}

const ButtonBlack: FunctionComponent<ButtonBlackProps> = (props) => {
    return (
        <button onClick={onClickButton} className={styles.button} >{props.text}</button>
    )
}

export default ButtonBlack