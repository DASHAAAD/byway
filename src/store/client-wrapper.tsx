"use client"; // Этот компонент теперь клиентский

import { Provider } from "react-redux";
import store from "@/store/store";
import React, { FC } from "react";

interface Type {
  children: React.ReactNode;
}

const ClientWrapper = ({ children }: Type) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientWrapper;
