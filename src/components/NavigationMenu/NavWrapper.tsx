import React, { createContext, FC, useContext } from "react";

// обёрка всего меню 

interface TypeWrapper {
    value?: boolean
    setValue?: (value: boolean) => boolean | void
    children?: React.ReactNode,
}

const NawContect = createContext<TypeWrapper> ({
    value: false,
    setValue: () => {}
})

const NavWrapper = ({
    value,
    setValue,
    children
}: TypeWrapper) => {
    return (
        <NawContect.Provider value={{ value, setValue }}>
            {children}
        </NawContect.Provider>
    )
}

// Этот компонент просто отображает компонент, на который пользователь может нажать, чтобы открыть меню.

const Nav = () => {
    const { value, setValue } = useContext(NawContect)
    return (
        <>
            <button
                onClick={() => setValue(!value)}
            >
               
            </button>
        </>
    )
}

// списки и сами элементы li 

const NavList = [
    {
        id: 'one',
        text: 'Another link'
    },
    {
        id: 'two',
        text: 'Navigation menu item'
    }
]

const NavListRender = () => {
    return (
        <ul>
            {NavList.map(item => {
                return (
                    <li style={{color: 'red', fontSize: '100px'}} key={item.id}>
                        {item.text}
                    </li>
                )
            })}
        </ul>
    )
}



NavWrapper.Nav = Nav
NavWrapper.NavListRender = NavListRender
export default NavWrapper


