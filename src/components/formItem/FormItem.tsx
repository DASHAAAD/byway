import { FunctionComponent } from 'react'
import styles from '../../components/formItem/FormItem.module.css'
import React from 'react'
import clsx from 'clsx'

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  
 }
export const Input: React.FC<InputProps> = ({
    className,
    ...props
}) => (
    <input
        {...props}
        className={clsx(className, styles.input)}
    />
)

