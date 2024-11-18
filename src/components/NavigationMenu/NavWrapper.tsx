import React, { createContext, FC, useContext, useState } from "react";

// обёрка всего меню 

interface TypeWrapper {
    value?: boolean
    setValue?: (value: boolean) => boolean | void
    toggleMenu?:(value: boolean) => boolean | void
    menuOpen?: boolean
    children?: React.ReactNode,
}

const NawContect = createContext<TypeWrapper>({
    value: false,
    setValue: () => { }
})

export const NavWrapper = ({
    value,
    setValue,
    children
}: TypeWrapper) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <NawContect.Provider value={{ value, setValue, menuOpen, toggleMenu }}>
            {children}
        </NawContect.Provider>
    )
}

// Этот компонент просто отображает компонент, на который пользователь может нажать, чтобы открыть меню.

const Nav: FC<TypeWrapper> = (props) => {
    const { value, setValue, menuOpen, toggleMenu } = useContext(NawContect)
    
    console.log(value)
    return (
        <>
            <button
                style={{
                    color: 'red',
                    fontSize: '40px',
                    backgroundColor: 'black',
                    width: '500px',
                    height: '500px'
                }}
                onClick={toggleMenu}
            >
               {props.children}
               fffff
            </button>
            {menuOpen && props.children}
        </>
    )
}

const List = ({children}:TypeWrapper) => {
    const { value, menuOpen } = useContext(NawContect);
    return menuOpen && <ul style={{color: 'red', fontSize:'30px'}} >{children}</ul>;
}

const Item = ({children}: TypeWrapper) => {
    return <li style={{color: 'red', fontSize: '40px'}}>{children}</li>;
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

NavWrapper.Nav = Nav;
NavWrapper.List = List;
NavWrapper.Item = Item;