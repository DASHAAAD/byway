import { CardUser } from '@/components/cards/CardUser/CardUser'
import { ProductCard } from '@/components/cards/ProductCard/ProductCard'
import { Title } from '@/components/Title/Title'
import React, { FC } from 'react'

export const Courses: FC = () => {
    return (
        <div>
            <Title text='All courses' />
            <Title text='Popular Mentors' />
            <CardUser />
            <Title text={''} />
            <ProductCard />
        </div>
    )
}
