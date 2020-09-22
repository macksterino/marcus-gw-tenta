import React from "react"
import { Link } from "gatsby"
import { NavWrapper, H2, H3 } from "../elements"

export const Nav = () => {
    return (
        <NavWrapper>
            <Link to="/">
                <H2 textAlign="center">
                    Marcus Garpehäll Wiklund
                </H2>
                <H3 textAlign="center">
                    Gatsby Tenta
                </H3>
            </Link>
        </NavWrapper>
    )
}