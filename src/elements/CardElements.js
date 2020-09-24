import styled from "styled-components"

export const CardWrapper = styled.div`
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${props => props.theme.shadows.shadow1};
    border: 0.5px solid ${props => props.theme.colors.dark};
    width: 80%;

    img {
        padding: 1rem;
        width: 100%;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        width: 50%;
        margin: 2rem !important;

        .gatsby-image-wrapper {
            width: 100% !important;
            height: 300px !important;
        }
    }

    @media ${props => props.theme.breakpoints.mobile} {
        width: 90%;
        margin: 1rem !important;

        .gatsby-image-wrapper {
            width: 100% !important;
            height: 300px !important;
        }
    }
`