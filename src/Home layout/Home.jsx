import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Offers from './Offers'
import Footer2 from './Footer2'
import TodaysDeal from './TodaysDeal'
import Categories from './Categories'
import FeaturedProducts from './FeaturedProducts'
import Hero from './Hero'
import HeaderDemo from './HeaderDemo'

function Home() {
    return (
        <>
            <Header></Header>
            {/* <Banner></Banner> */}
            <Hero></Hero>
            <Offers></Offers>
            <TodaysDeal></TodaysDeal>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
            <Footer2></Footer2>
        </>
    )
}

export default Home