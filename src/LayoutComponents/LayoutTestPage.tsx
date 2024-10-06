import Header from '@/sections/Header/Header'
import React, { FunctionComponent } from 'react'
import LayoutColumn from './LayoutColumn/LayoutColumn'
import TwoColumn from './TwoColumn/TwoColumn'
import { LayoutFlex } from './LayoutFlex/LayoutFlex'
import { LayoutColumnAndFoto } from './LayoutColumnAndFoto/LayoutColumnAndFoto'

import man from '../../src/image/man.png'


// СЕКЦИИ 
const SectionOne: FunctionComponent = () => {
    return <LayoutColumn styles={{
        fontWeight: '500',
        fontSize: '40px',
        lineHeight: '48px',
        color: 'rgba(28, 32, 36, 0.92)'
    }}>
        Это - заголовок первого уровня
    </LayoutColumn>
}

const SectionTwo: FunctionComponent = () => {
    return <LayoutColumn styles={{
        fontWeight: '500',
        fontSize: '40px',
        lineHeight: '48px',
        color: 'rgba(28, 32, 36, 0.92)'
    }}>
        Да, по новым стандартам HTML семантики их может быть несколько на странице
    </LayoutColumn>
}

const SectionThree: FunctionComponent = () => {
    return <TwoColumn styles={{ display: 'flex' }}
        childrenOne={
            <>
                <h1
                    style={{
                        fontWeight: '500',
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: 'rgba(28, 32, 36, 0.92)'
                    }}
                >Это - шаблон секции из двух колонок</h1>
                <p
                    style={{
                        fontWeight: '500',
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: 'rgba(28, 32, 36, 0.92)'
                    }}
                >Колонки просто занимают всё свободное пространство и делят пополам</p>
            </>
        }
        childrenTwo={
            <>
                <h1
                    style={{
                        fontWeight: '500',
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: 'rgba(28, 32, 36, 0.92)'
                    }}
                >Это - шаблон секции из двух колонок</h1>
                <p
                    style={{
                        fontWeight: '500',
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: 'rgba(28, 32, 36, 0.92)'
                    }}
                >Колонки просто занимают всё свободное пространство и делят пополам</p>
            </>
        }>
    </TwoColumn>
}

const SectionFour: FunctionComponent = () => {
    return (
        <LayoutColumnAndFoto ColumnItem={
            <>
                <div>
                    <h1
                        style={{
                            width: '500px',
                            fontWeight: '500',
                            fontSize: '40px',
                            lineHeight: '48px',
                            color: 'rgba(28, 32, 36, 0.92)'
                        }}
                    >
                        Но также колонкой может быть и фотография
                    </h1>
                    <p
                        style={{
                            width: '500px',
                            fontWeight: '500',
                            fontSize: '40px',
                            lineHeight: '48px',
                            color: 'rgba(28, 32, 36, 0.92)'
                        }}>
                        Как в примере справа
                    </p>
                </div>
            </>
        } src={man} alt={'картинка'} />
    )
}

const SectionFive: FunctionComponent = () => {
    return (
        <LayoutColumn>
            {<>
                <h1
                    style={{
                        fontWeight: '500',
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: 'rgba(28, 32, 36, 0.92)'
                    }}
                >Это - шаблон секции из одной колонки</h1>
                <p
                    style={{
                        fontWeight: '500',
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: 'rgba(28, 32, 36, 0.92)'
                    }}
                >Аналогично, заголовок второго уровня и контент</p>
            </>}
        </LayoutColumn>
    )
}

// САМА СТРАНИЦА 

const LayoutTestPage: FunctionComponent = () => {
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
        </div>
    )
}

export default LayoutTestPage