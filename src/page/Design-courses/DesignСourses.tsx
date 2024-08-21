import { Title } from '@/components/Title/Title'
import Footer from '@/sections/Footer/Footer'
import Header from '@/sections/Header/Header'
import React, { FunctionComponent } from 'react'
import styles from '../../page/Design-courses/DesignCourses.module.css'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const DesignСourses: FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Title text='Design courses       ' />
                <div className={styles.buttons}>
                    <button className={styles.filter}>Filter</button>
                    <button className={styles.soft}>Sort By</button>
                    <button className={styles.relevance}>Relevance</button>
                </div>
                <aside>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
                </aside>

            </div>
            <Footer />
        </div>
    )
}

export default DesignСourses