import styled from "styled-components";

export const Content = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    grid: repeat(9, fit-content(300px))/100%;
    grid-template-areas:
        "colors"
        "typography"
        "buttons"
        "links"
        "inputs"
        "badges"
        "tooltips"
        "alerts"
        "loading";

    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        display: grid;
        grid: repeat(5, fit-content(300px))/repeat(4, 1fr);
        grid-template-areas:
            "colors typography typography typography"
            "colors buttons buttons buttons";
    }
`