import React, { useEffect } from 'react'
import MainHeader from './MainHeader'
import EcommerceCategory from './EcommerceCategory'
import BestSeller from './BestSeller'
import EcommerceHero from './EcommerceHero'
import EcommerceFooter from './EcommerceFooter'
import LatestArrival from './LatestArrival'
import Footwear from './Footwear'
import OfferStrip from '../Mega Menu/OfferStrip'
import Top3Ecommercecategory from './Top3Ecommercecategory'


function EcommerceApp() {

  return (
    <>
    
    <MainHeader></MainHeader>
    <EcommerceHero></EcommerceHero>
    <OfferStrip></OfferStrip>
    <EcommerceCategory></EcommerceCategory>
    <BestSeller></BestSeller>
    <LatestArrival></LatestArrival>
    <Top3Ecommercecategory></Top3Ecommercecategory>
    <Footwear></Footwear>
    <EcommerceFooter></EcommerceFooter>
    </>
  )
}

export default EcommerceApp