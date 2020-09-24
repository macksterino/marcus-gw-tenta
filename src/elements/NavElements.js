import styled from "styled-components"

export const NavWrapper = styled.nav`
    grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    & a {
        text-decoration: none;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 3 / span 10;
    }
`