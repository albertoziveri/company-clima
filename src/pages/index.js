import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'react-bootstrap';
import ProgressBar  from "../components/chart"

const MainContainer = styled.div`
  background-color:#343A44;
  min-height:100vh;
  height:100%;
`



const IndexPage = () => (
  <MainContainer>

  <Layout>
    <SEO title="Home" />
   <ProgressBar></ProgressBar>
  </Layout>
  </MainContainer>

)

export default IndexPage
