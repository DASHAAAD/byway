import React, { FC } from 'react'

import { createContext } from 'react';
import { useContext } from 'react';

import styles from './coursesList.module.css'

export const LevelContext = createContext();


export const ArrCourses = [
    {
        id: 'one',
        placeholder: 'Sort by'
    },
    {
        id: 'one',
        placeholder: 'Sort by'
    },
    {
        id: 'one',
        placeholder: 'Sort by'
    },
    {
        id: 'one',
        placeholder: 'Sort by'
    }
]

export const CoursesList: FC = () => {
    const level = useContext(LevelContext);
    return (
        <>
            <LevelContext.Provider value={styles.text}>
                {ArrCourses.map(item => {
                    return (
                        <a key={item.id} href="#">
                            <input type="text" placeholder={item.placeholder} />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#1C2024" stroke-opacity="0.92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    )
                })}
            </LevelContext.Provider>
        </>
    )
}
