import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../style/topdestination.css'
import DefaultImage from '../components/defaultImage';
import InfiniteScroll from 'react-infinite-scroller';

export default () => {
    /*
       Graphql query on build.
     */
  const data = useStaticQuery(graphql`
    query AllDestinationQuery {
        allNodeDestination(sort: {order: DESC, fields:[created]}){
            edges {
              node {
                field_english_title
                relationships {
                  field_image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1024, maxHeight: 700) {
                            ...GatsbyImageSharpFluid
                          }
                      }
                    }
                  }
                    }
              }
            }
          }
    }
  `)
  let allDestinations = data.allNodeDestination.edges;
  
   function loadFunc(page){

   }

  console.log(allDestinations)
  return(
    <div>
        <h1>All Destinations</h1>
        <div className="row clearfix">
        <InfiniteScroll
    pageStart={0}
    loadMore={loadFunc}
    hasMore={true || false}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
        {
            allDestinations.map((destination)=>(
         <div key= {destination.node.field_english_title} className="column"> 
         {destination.node.relationships.field_image.localFile ? <Img fluid={destination.node.relationships.field_image.localFile.childImageSharp.fluid} /> : <DefaultImage />}
            <p className="legend">{destination.node.field_english_title}</p>
            <div className="selected-des__detail">
                  The city of a thousand minarets
                </div>
         </div>

      ))
    }
   </InfiniteScroll>
        </div>

    </div>
  )
}
