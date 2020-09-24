import styled from "styled-components"

export const ErrorWrapper = styled.main`
    grid-column: 1 / span 14;
    grid-row: 3 / span 5;
    background-color: ${props => props.theme.colors.light};
    padding: ${props => `${props.theme.spacings.medium} ${props.theme.spacings.small}`};
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${props => props.theme.breakpoints.mobile} {
        padding: ${props => `${props.theme.spacings.small} ${props.theme.spacings.xSmall}`};
        flex-direction: column;
    }
`