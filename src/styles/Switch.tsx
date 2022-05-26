import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`

interface iSwitch{
    toggle: boolean
}

export const ContainerSwitch = styled.div<iSwitch>`
    height: 20px;
    width: 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        background-color: rgb(255, 255, 255);
        opacity: 0.3;
        width: 100%;
        height: 100%;
        border-radius: 2.5rem;
        position: absolute;
        pointer-events: none;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    ${({toggle})=>{
        if(toggle==true){
            return css` div { background-color: rgb(144, 202, 249); }`
        }
    }}
    
    input{
        height: 100%;
        width: 100%;
        opacity: 0;
        z-index: 10;
        cursor: pointer;
    }

    span{
        z-index: 1;
        position: absolute;
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 50%;
        background-color: rgb(224, 224, 224);
        left: 0;
        transition:  .25s;
        transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    input:checked + span {
        left: 50%;
        background-color: rgb(144, 202, 249);
    }

    
`