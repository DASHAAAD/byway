import type { Meta, StoryObj } from "@storybook/react";
import { CardUser } from "./CardUser";

import style from './CardUser.module.css'
import man from '../../../image/categoryIcon.png'
import { Type } from "@/components/coursesList/coursesListSlice";
import Image from "next/image";

export default {
    title: 'default/CardUser',
    component: CardUser,
} as Meta;


const Template: Story<Type> = (args) => <CardUser {...args} />

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

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <div className={style.wrapper}>
                {ArrayUserProps.map(Item => {
                    return (
                        <div className={style.container} key={Item.id}>
                            <img className={style.img} src={Item.imgUrl} alt={Item.alt} />
                            <h2 className={style.title}>{Item.nameUser}</h2>
                            <p className={style.text}>{Item.text}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
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


export const OneUser = Template.bind({});
OneUser.args = {
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