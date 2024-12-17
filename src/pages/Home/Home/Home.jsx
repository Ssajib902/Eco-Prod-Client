import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularMenu from '../PopularMenu/PopularMenu'
import Featured from '../Featured/Featured'
import Testimonial from '../Testimonials/Testimonial'
import About from '../About/About'
import CallUs from '../CallUs/CallUs'
import Recommends from '../Recomendation/Recommends'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Eco Prod | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <CallUs />
      <Featured />
      <Testimonial />
    </>
  )
}

export default Home