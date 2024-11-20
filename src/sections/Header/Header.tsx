import React, { FunctionComponent } from 'react'
import Logo from '@/components/logo/Logo'

import Image from 'next/image'
import basket from '../../image/basket.png'
import search from '../../image/search.png'

import styles from '../Header/header.module.css'
import { Link } from 'react-router-dom'

const Header = ({...props}:React.JSX.Element) => {
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
                    <Link className={styles.buttonOne} to='/LoginForm'>Log in</Link>
                    {/* <button className={styles.buttonOne}>Log in</button> */}
                    <Link className={styles.buttonTwo} to='/Register'>Sign up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header