import React from "react"
import { CardWrapper, P, H2 } from "../elements"
import { Button } from "../components"
import Img from "gatsby-image"

export const ContentCard = ({date, title, excerpt, slug, featureImage}) => {
    return (
        <CardWrapper>
            <P size="xSmall" textAlign="center" margin="0 0 0.5rem 0" color="dark2">
                {date}
            </P>
            <H2 textAlign="center" margin="0 0 1rem 0">
                {title}
            </H2>
            <P size="small" color="dark2" textAlign="center" margin="0 0 1.5rem 0">
                {excerpt}
            </P>
            <Img fixed={featureImage} />
            <Button href={slug}>Read More</Button>
        </CardWrapper>
    )
}