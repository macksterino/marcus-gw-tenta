import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1, H3, ErrorWrapper } from "../elements"

const notFound = ({ data }) => {
    const featureImage = data.imageSharp.fixed

    return (
        <Container>
            <FeatureImage fixed={featureImage} />
                <ErrorWrapper>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    404 
                </H1>
                <H3 textAlign="center" margin="0 0 1rem 0">
                    Page not found
                </H3>
                <H3 textAlign="center" margin="2rem 0 1rem 0">
                    The page you are looking for does not exist or an error occured.
                </H3>
                </ErrorWrapper>
        </Container>
    )
}

export default notFound

export const notFoundQuery = graphql`
    query NotFoundQuery {
        imageSharp(fixed: { originalName: { eq: "sadcat.jpg" } }) {
            fixed {
                ...GatsbyImageSharpFixed
            }
        }
    }
`