import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../style/topdestination.css'


export default () => {
    /*
       Graphql query on build.
     */
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      entitySubqueueTopDestination {
        relationships {
          items {
            field_english_title
            relationships {
              field_image {
                filename
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
  let todDestinations = data.entitySubqueueTopDestination.relationships.items;

  const params = {
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10
  }
  
  console.log(todDestinations)
  return(
    <div className="top-destination-container">
    <h1>TOP Destinations</h1>
    <h2 className="heading__title">
      Check out some of the most popular travel destinations
    </h2>
    <Swiper {...params}>
    {
      todDestinations.map((destination)=>(
       
         <div key= {destination.field_english_title}>
            <Img fluid={destination.relationships.field_image.localFile.childImageSharp.fluid} />
            <p className="legend">{destination.field_english_title}</p>
            <div className="selected-des__detail">
                  The city of a thousand minarets
                </div>
         </div>
        

      ))
    }
    </Swiper>
    </div>
  )
}
