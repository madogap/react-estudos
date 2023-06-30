import React, { createContext } from "react";
import { theme } from "./Theme";

//provedor de context
type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

//Component de provedor
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

}