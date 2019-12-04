import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllDestination from '../components/allDestination'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <AllDestination />
  </Layout>
)

export default SecondPage
