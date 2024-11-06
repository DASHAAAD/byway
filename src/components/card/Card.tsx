import React, { createContext, FunctionComponent, useContext } from 'react'
import Image from 'next/image'

import { name, price, titleText } from './cardSlice';


import { useAppSelector, useAppDispatch } from '../../app/hooks';



import card from '../../image/card.png'

import styles from './card.module.css'


export const initialValue = {
    titleText: `Beginner’s Guide to Design`,
    name: `By Ronald Richards`,
    price: `$149.9`
};

export const Card = () => {
   
    const Context = createContext(initialValue);
    let { titleText, name, price } = useContext(Context);

    
  const count = useAppSelector((state) => state.card);


    return (
        <Context.Provider value={initialValue}>
            <div className={styles.wrapper}>
                <Image className={styles.img} src={card} alt={''} />
                <div className={styles.info}>
                    <h2 className={styles.titlestyle}>{count.titleText}</h2>
                    <p className={styles.text}>{count.name}</p>
                    <span className={styles.price}>{count.price}</span>
                </div>
            </div>

         </Context.Provider>
    )
}


