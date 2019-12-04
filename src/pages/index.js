import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopDestination from '../components/TopDestination'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopDestination />
  </Layout>
)

export default IndexPage
