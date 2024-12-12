
import React, { FunctionComponent } from 'react'
import styles from '../../page/Design-courses/DesignCourses.module.css'

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const DesignСourses: FunctionComponent = () => {
    return (

        <div className={styles.container}>
            <p>Design courses</p>
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
    )
}

export default DesignСourses