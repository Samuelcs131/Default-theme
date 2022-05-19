import { createGlobalStyle } from 'styled-components';
import { iGlobalStyle } from '../types/styles';



export default createGlobalStyle<iGlobalStyle>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({theme})=>theme.pallete.background.default};
        border: none;
        outline: none;
   }

   html{
       font-size: ${({theme})=>theme.typography.htmlFontSize};
   }

   body{
        font-family: ${({theme})=>theme.typography.body1.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.body1.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.body1.letterSpacing};
        font-weight: ${({theme})=>theme.typography.body1.fontWeight};
        color: ${({theme})=>theme.pallete.text.primary};
   }

   // HEADING
   h1{
        font-family: ${({theme})=>theme.typography.h1.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.h1.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h1.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h1.fontWeight};
   }
   h2{
        font-family: ${({theme})=>theme.typography.h2.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.h2.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h2.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h2.fontWeight};
   }
   h3{
        font-family: ${({theme})=>theme.typography.h3.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.h3.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h3.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h3.fontWeight};
   }
   h4{
        font-family: ${({theme})=>theme.typography.h4.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.h4.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h4.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h4.fontWeight};
   }
   h5{
        font-family: ${({theme})=>theme.typography.h5.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.h5.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h5.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h5.fontWeight};
   }
   h6{
        font-family: ${({theme})=>theme.typography.h6.fontFamily};
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        line-height: ${({theme})=>theme.typography.h6.lineHeight};
        letter-spacing: ${({theme})=>theme.typography.h6.letterSpacing};
        font-weight: ${({theme})=>theme.typography.h6.fontWeight};
   }

  

`