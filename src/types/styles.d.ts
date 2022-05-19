import "styled-components"
import { iBreakpoints, iPallete, iScreen, iShape, iThemeDefault, iTypography } from "./themeDefault";

declare module 'styled-components' {
    export interface DefaultTheme{
        pallete: iPallete,
        shape: iShape,
        typography: iTypography,
        breakpoints: iBreakpoints,
        screen: iScreen
    }
}


export interface iGlobalStyle {
    theme: iThemeDefault
}