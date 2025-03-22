import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", // variables syntax
    darkTheme: () => {}, // method syntax
    lightTheme: () => {},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}