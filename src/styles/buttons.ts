import styled, { css } from "styled-components";
import { rgb, rgba } from 'polished'

export const Container = styled.section`
    grid-area: buttons; 
    position: relative;
    border: 1px solid ${({theme})=>theme.pallete.primary.main};
    padding: 30px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    min-width: 64px;
    flex-wrap: wrap;

    div{
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

interface iDefaultButton {
    size?: string,
    color?: string,
    variant?: string
}

export const Button = styled.button<iDefaultButton>`
    padding: 8px 22px;
    border-radius: ${({theme})=>theme.shape.borderRadius};
    display: inline-block;
    transition: .3s;
    cursor: pointer;
    place-items: center;
    color: ${({theme})=>theme.pallete.text.primary};
    user-select: none;
    font-size: 0.9375rem;

    &:active{
        background-color: ${({theme})=>rgba(theme.pallete.primary.main,0.08) };
    }
     
    // SIZE
    ${({size})=>{
        if(size === 'medium'){
            return( css` padding: 5px 15px; `)
        } else if (size === 'small'){
            return( css` padding: 3px 9px; `)
        }
    }}

    // VARIANT
    ${({variant})=>{
            if(variant === 'outlined'){
                return( css`
                    border: 1px solid ${({theme})=>theme.pallete.primary.main};
                `)

            } else if (variant === 'contained'){
                return( css`
                    background-color: ${({theme})=>theme.pallete.primary.main};
                    
                    &:active{
                        background-color: ${({theme})=>theme.pallete.primary.dark};
                    }
                `)
            }
    }}

    // COLOR
    ${({color})=>{
            if(color === 'secundary'){
                return( css`
                    border: 1px solid ${({theme})=>theme.pallete.primary.main};
                `)
            }  
            
            if (color === 'error'){
                return( css`
                    background-color: ${({theme})=>theme.pallete.primary.main};
                    
                    &:active{
                        background-color: ${({theme})=>theme.pallete.primary.dark};
                    }
                `)
            }
    }}
`