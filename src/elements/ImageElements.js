import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
    grid-column: 1 / span 14;
    grid-row: 2 / 3;
    overflow: hidden;
    position: relative;
    filter: brightness(0.6);

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 14;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        height: 80%;
    }
`