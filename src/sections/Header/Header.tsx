import React, { FunctionComponent } from 'react'
import Logo from '@/components/logo/Logo'

import Image from 'next/image'
import basket from '../../image/basket.png'
import search from '../../image/search.png'

import styles from '../Header/header.module.css'

const Header: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo />
                    <a className={styles.link} href="#">Categories</a>
                </div>
                <form className={styles.formWrapper} action="">
                    <div className={styles.form}>
                        <Image className={styles.svgIcon} src={search} alt={''} />
                        <input className={styles.input} type="text" placeholder='Search courses' />
                    </div>
                </form>
                <div className={styles.buttons}>
                    <a className={styles.link} href="#">
                        <Image src={basket} alt={''} />
                    </a>
                    <button className={styles.buttonOne}>Log in</button>
                    <button className={styles.buttonTwo}>Sign up</button>
                </div>
            </div>
        </header>
    )
}

export default Header