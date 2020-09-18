import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="September 18, 2020" 
          title="Lorem Ipsum" 
          excerpt="Lorem Ipsum latin is very lame" 
          slug="/test" 
        />
      </Content>
    </Container>
  )
}

export default IndexPage
