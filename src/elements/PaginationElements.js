import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
    grid-column: 1 / span 14;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};

    a:nth-child(1) {
        color: ${props => props.isFirst ? props.theme.colors.grey : props.theme.colors.dark};
        pointer-events: ${props => props.isFirst ? "none" : "auto"};
        cursor: ${props => props.isFirst ? "default" : "pointer"};
        align-items: center;
        justify-content: center;
    }

    a:nth-child(2) {
        color: ${props => props.isLast ? props.theme.colors.grey : props.theme.colors.dark};
        pointer-events: ${props => props.isLast ? "none" : "auto"};
        cursor: ${props => props.isLast ? "default" : "pointer"};
    }
`

export const PaginationElement = styled(props => <Link {...props} />)`
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    margin: 0 2rem;

    &:hover, 
    &:focus {
        text-decoration: underline;
    }
`