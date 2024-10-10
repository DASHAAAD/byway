import { FunctionComponent } from 'react'
import styles from '../../components/formItem/FormItem.module.css'
import React from 'react'
import clsx from 'clsx'

interface InputProps extends React.HTMLProps<HTMLInputElement> {

}

const Input: React.FC<InputProps> = ({
    className,
    title,
    ...props

}) => (
    <input
        title={title}
        {...props}
        className={clsx(className, styles.input)}
    />
)

export default Input

