import React, { FunctionComponent, ReactNode } from 'react'
import { LayoutFlex } from './LayoutFlex'

import styles from '../../LayoutComponents/LayoutFlex/testCss.module.css'

//test

const LayoutFlexPage: FunctionComponent = ({
    
}) => {
    return (
        <LayoutFlex Left={
            <>
                <h1 className={styles.text}>LeftElement</h1>
            </>
        }
            Right={
                <>
                    <h1 className={styles.text}>RightElement</h1>
                </>
            }
        />
    )
}

export default LayoutFlexPage