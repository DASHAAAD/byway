import React, { createContext, FC, useContext, useState } from "react";

// обёрка всего меню

export interface TypeWrapper {
  value?: boolean;
  setValue?: (value: boolean) => boolean | void;
  toggleMenu?: () => void;
  menuOpen?: boolean;
  children?: React.ReactNode;
}

const NawContect = createContext<TypeWrapper>({
  value: false,
  setValue: () => {},
});

export const NavWrapper = ({ value, setValue, children }: TypeWrapper) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NawContect.Provider value={{ value, setValue, menuOpen, toggleMenu }}>
      {children}
    </NawContect.Provider>
  );
};

// Этот компонент просто отображает компонент, на который пользователь может нажать, чтобы открыть меню.

const Nav: FC<TypeWrapper> = (props) => {
  const { value, setValue, menuOpen, toggleMenu } = useContext(NawContect);

  console.log(value);
  return (
    <>
      <button
        style={{
          marginBottom: "20px",
          width: "360px",
          height: "53px",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "24px",
          color: "rgba(237, 238, 240, 0.96)",
          borderRadius: "24px",
          backgroundColor: "black",
        }}
        onClick={toggleMenu}
      >
        {props.children}
      </button>
      {/* {menuOpen && props.children
            } */}
    </>
  );
};

const List = ({ children }: TypeWrapper) => {
  const { value, menuOpen } = useContext(NawContect);
  return menuOpen && <ul>{children}</ul>;
};

const Item = ({ children }: TypeWrapper) => {
  return (
    <li
      style={{
        marginBottom: "10px",
        width: "360px",
        height: "53px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "24px",
        color: "#1C2024",
        borderRadius: "24px",
        border: "1px solid #1C2024",
      }}
    >
      {children}
    </li>
  );
};

// списки и сами элементы li

export const NavList = [
  {
    id: "one",
    text: "Another link",
  },
  {
    id: "two",
    text: "Navigation menu item",
  },
];

NavWrapper.Nav = Nav;
NavWrapper.List = List;
NavWrapper.Item = Item;
