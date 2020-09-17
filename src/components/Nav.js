import React from "react"
import { Link } from "gatsby"
import { NavWrapper } from "../elements"

export const Nav = () => {
    return (
        <NavWrapper>
            <Link to="/">
            <h2>Marcus Garpehäll Wiklund</h2>
            </Link>
        </NavWrapper>
    )
}