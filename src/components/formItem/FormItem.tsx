import React, { FormEventHandler, FunctionComponent, HTMLInputTypeAttribute } from 'react'
import styles from '../../components/formItem/FormItem.module.css'

interface FormItemProps {
    title: string,
    text: string,
    value?:  HTMLInputTypeAttribute
    onChange?: FormEventHandler
}

const FormItem: FunctionComponent<FormItemProps> = (props) => {
    return (
        <div>
            <h3 className={styles.title}>{props.title}</h3>
            <input className={styles.input} type="text" placeholder={props.text} value={props.value}/>
        </div>
    )
}

export default FormItem