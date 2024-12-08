import type { StoryObj } from "@storybook/react";

import style from './CardUser.module.css'
import man from '../../../image/categoryIcon.png'
import Image from "next/image";
import { userSlice } from "../../../slice/CardUserSlice";

const meta = {
    title: 'default/CardUser',
    component: userSlice,
}

export default meta
type Story = StoryObj<typeof meta>


export const ArrayUserProps = [
    {
        id: 'one',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание',
    },

    {
        id: 'two',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    },

    {
        id: 'three',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    },

    {
        id: 'four',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    }
]

export const Default: Story = {
    args: {
        children: (
            <>
                <div className={style.wrapper}>
                    {ArrayUserProps.map(Item => {
                        return (
                            <div className={style.container} key={Item.id}>
                                <Image src={man} alt={""} />
                                <h2 className={style.title}>{Item.nameUser}</h2>
                                <p className={style.text}>{Item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export const OneUserArr = [
    {
        id: 'one',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание',
    },
]

export const OneUser: Story = {
    args: {
        children: (
            <>
                <div className={style.wrapper}>
                    {OneUserArr.map(Item => {
                        return (
                            <div className={style.container} key={Item.id}>
                                <Image className={style.img} src={man} alt={""} />
                                <h2 className={style.title}>{Item.nameUser}</h2>
                                <p className={style.text}>{Item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}



