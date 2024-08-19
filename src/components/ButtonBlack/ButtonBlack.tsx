import React, { FunctionComponent } from 'react'
import styles from '../../components/buttonBlack/buttonBlack.module.css'

interface ButtonBlackProps {
    text: string
}

const ButtonBlack:FunctionComponent<ButtonBlackProps> = (props) => {
    return (
        <button className={styles.button}>{props.text}</button>
    )
}

export default ButtonBlack