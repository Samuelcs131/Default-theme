import styled from "styled-components";

export const Container = styled.section`
    grid-area: typography; 
    position: relative;
    border: 1px solid ${({theme})=>theme.pallete.primary.main};

    & > h6{
        position: absolute;
        text-transform: uppercase;
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        top: -15px;
        left: 20px;
        padding: 0 10px;
        color: ${({theme})=>theme.pallete.primary.main};
        background-color: ${({theme})=>theme.pallete.background.default};
    }
`
 
export const Heading = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > span{
        flex: 1 1 30%;
        padding: 30px 30px 0;
        min-width: 10em;

        &:nth-child(1){
            h1, h4{
                font-weight: ${({theme})=>theme.typography.fontWeightBold}; 
            }
        }
        &:nth-child(2){
            h1, h4{
                font-weight: ${({theme})=>theme.typography.fontWeightMedium}; 
            }
        }
        &:nth-child(3){
            h1, h4{
                font-weight: ${({theme})=>theme.typography.fontWeightRegular}; 
            }
        }
    }

`

export const Font = styled.div`
    display: flex;
    flex-wrap: wrap;

    
    & > div{
        flex: 1 1 45%;
        padding: 30px;
        min-width: 16em;
        
        h6:nth-child(1){
            margin-top: 20px;
            margin-bottom: 20px;
        }

        h1,h2,h3,h4,h5,h6 {
            margin-bottom: 10px;
        }

        p{
            margin-bottom: 15px;
            font-size: ${({theme})=>theme.typography.body1.fontFamily};
        }
    }
`