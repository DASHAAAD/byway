import React, { FunctionComponent } from 'react'
import styles from '../../components/formItem/FormItem.module.css'

 export interface FormItemProps {
    title: string,
    text: string,
    type: string
    email?: string,
    password?: string,
    copyPassword?: string,
    error?: string
}

const FormItem: FunctionComponent<FormItemProps> = (props) => {
    return (
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <input className={styles.input} type="text" placeholder={props.text} value={props.value} />
        </div>
    )
}

export default FormItem