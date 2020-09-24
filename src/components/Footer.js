import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { 
    FooterWrapper, 
    FooterSocialWrapper, 
    FooterSocialIcons,
    P,
    H2,
} from "../elements"

export const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            github: file(relativePath: { eq: "github.svg" }) {
                publicURL
            }
            linkedin: file(relativePath: { eq: "linkedin.svg" }) {
                publicURL
            }
            instagram: file(relativePath: { eq: "instagram.svg" }) {
                publicURL
            }
            twitter: file(relativePath: { eq: "twitter.svg" }) {
                publicURL
            }
        }
    `)

    return <FooterWrapper>
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <H2 textAlign="center">
                Marcus Garpehäll Wiklund
                </H2>
                <a href="https://github.com/macksterino" target="_blank" rel="noopener noreferrer">
                    <img src={data.github.publicURL} alt="Github logo" />
                </a>
                <a href="https://www.linkedin.com/in/marcus-garpeh%C3%A4ll-wiklund-9b83121a1/" target="_blank" rel="noopener noreferrer">
                    <img src={data.linkedin.publicURL} alt="LinkedIn logo" />
                </a>
                <a href="https://instagram.com/marcusgw" target="_blank" rel="noopener noreferrer">
                    <img src={data.instagram.publicURL} alt="Instagram logo" />
                </a>
                <a href="https://twitter.com/m4ckstar" target="_blank" rel="noopener noreferrer">
                    <img src={data.twitter.publicURL} alt="Twitter logo" />
                </a>
            </FooterSocialIcons>
            <P size="xSmall" color="dark3">© 2020 Marcus Garpehäll Wiklund. All rights reserved.</P>
        </FooterSocialWrapper>
    </FooterWrapper>
}