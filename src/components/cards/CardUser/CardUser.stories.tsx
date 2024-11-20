import type { StoryObj } from "@storybook/react";
import { CardUser } from "./CardUser";
import style from './CardUser.module.css'
import man from '../../../image/categoryIcon.png'
import Image from "next/image";

const meta = {
    title: 'default/CardUser',
    component: CardUser,
}

export default meta
type Story = StoryObj<typeof meta>


const ArrayUserProps = [
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
        id: 'two',
        nameUser: 'Ronald Richards',
        text: 'UI/UX Designer',
        imgUrl: man,
        alt: 'описание'
    },

    {
        id: 'two',
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

const oneUser = [
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
                    {oneUser.map(Item => {
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

