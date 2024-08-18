import React, { FunctionComponent } from 'react'
import Logo from '@/components/logo/Logo'

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
                        <svg className={styles.svgIcon} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3.50039C8.04131 3.50039 6.64236 4.07985 5.61091 5.1113C4.57946 6.14275 4 7.5417 4 9.00039C4 10.4591 4.57946 11.858 5.61091 12.8895C6.64236 13.9209 8.04131 14.5004 9.5 14.5004C10.9587 14.5004 12.3576 13.9209 13.3891 12.8895C14.4205 11.858 15 10.4591 15 9.00039C15 7.5417 14.4205 6.14275 13.3891 5.1113C12.3576 4.07985 10.9587 3.50039 9.5 3.50039ZM2.5 9.00039C2.50009 7.88106 2.76861 6.77807 3.28303 5.78395C3.79745 4.78983 4.54276 3.93356 5.45645 3.28698C6.37015 2.6404 7.42557 2.22236 8.5342 2.06792C9.64282 1.91349 10.7723 2.02716 11.8279 2.39941C12.8836 2.77166 13.8345 3.39162 14.601 4.2073C15.3676 5.02298 15.9273 6.01059 16.2333 7.08728C16.5393 8.16397 16.5827 9.29834 16.3597 10.3952C16.1368 11.4921 15.654 12.5196 14.952 13.3914L18.28 16.7204C18.3537 16.789 18.4128 16.8718 18.4538 16.9638C18.4948 17.0558 18.5168 17.1552 18.5186 17.2559C18.5204 17.3566 18.5018 17.4566 18.4641 17.55C18.4264 17.6434 18.3703 17.7282 18.299 17.7994C18.2278 17.8706 18.143 17.9268 18.0496 17.9645C17.9562 18.0022 17.8562 18.0208 17.7555 18.019C17.6548 18.0172 17.5555 17.9952 17.4635 17.9542C17.3715 17.9132 17.2887 17.8541 17.22 17.7804L13.891 14.4524C12.8625 15.2808 11.6207 15.8013 10.309 15.954C8.99727 16.1066 7.66912 15.885 6.47795 15.3149C5.28677 14.7448 4.28117 13.8493 3.57727 12.732C2.87338 11.6146 2.49991 10.321 2.5 9.00039Z" fill="#EDEEF0" fill-opacity="0.96" />
                        </svg>
                        <input className={styles.input} type="text" placeholder='Search courses' />
                    </div>
                </form>
                <div className={styles.buttons}>
                    <a className={styles.link} href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00014 14H18.1359C19.1487 14 19.6551 14 20.0582 13.8112C20.4134 13.6448 20.7118 13.3777 20.9163 13.0432C21.1485 12.6633 21.2044 12.16 21.3163 11.1534L21.9013 5.88835C21.9355 5.58088 21.9525 5.42715 21.9031 5.30816C21.8597 5.20366 21.7821 5.11697 21.683 5.06228C21.5702 5 21.4155 5 21.1062 5H4.50014M2 2H3.24844C3.51306 2 3.64537 2 3.74889 2.05032C3.84002 2.09463 3.91554 2.16557 3.96544 2.25376C4.02212 2.35394 4.03037 2.48599 4.04688 2.7501L4.95312 17.2499C4.96963 17.514 4.97788 17.6461 5.03456 17.7462C5.08446 17.8344 5.15998 17.9054 5.25111 17.9497C5.35463 18 5.48694 18 5.75156 18H19M7.5 21.5H7.51M16.5 21.5H16.51M8 21.5C8 21.7761 7.77614 22 7.5 22C7.22386 22 7 21.7761 7 21.5C7 21.2239 7.22386 21 7.5 21C7.77614 21 8 21.2239 8 21.5ZM17 21.5C17 21.7761 16.7761 22 16.5 22C16.2239 22 16 21.7761 16 21.5C16 21.2239 16.2239 21 16.5 21C16.7761 21 17 21.2239 17 21.5Z" stroke="#EDEEF0" stroke-opacity="0.96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                    <button className={styles.buttonOne}>Log in</button>
                    <button className={styles.buttonTwo}>Sign up</button>
                </div>
            </div>
        </header>
    )
}

export default Header