import styled from "styled-components"

export const ContentWrapper = styled.main`
    grid-column: 1 / span 14;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.colors.light2};
    padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.small}`};
    z-index: 10;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.small} ${props.theme.spacings.xSmall}`};
        flex-direction: column;
    }
`