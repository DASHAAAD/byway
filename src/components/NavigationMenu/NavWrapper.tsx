import React, { createContext, useContext } from "react";

// обёрка всего меню 

interface TypeWrapper {
    value: boolean
    setValue: (value: string) => void
    children?: React.ReactNode
}

const NawContect = createContext<TypeWrapper>({
    value: false,
    setValue: () => { }
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
        <div onClick={() => setValue(value)}></div>
    )
}




export default NavWrapper


