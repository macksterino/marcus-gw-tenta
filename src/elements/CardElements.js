import styled from "styled-components"

export const CardWrapper = styled.div`
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${props => props.theme.shadows.shadow1};
    border: 1px solid ${props => props.theme.colors.dark3};
    width: 80%;

    img {
        padding: 1rem;
        width: 100%;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        width: 40%;

        .gatsby-image-wrapper {
            width: 100% !important;
            height: 300px !important;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 90%;
        margin: 1rem;

        .gatsby-image-wrapper {
            width: 100% !important;
            height: 300px !important;
        }
    }
`