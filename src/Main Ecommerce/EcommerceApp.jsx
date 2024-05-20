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
import Mobilebanner from './Mobilebanner'
import PrdoctsForMobile from './PrdoctsForMobile'
import MobileLowerMenu from './MobileLowerMenu'


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
    <Mobilebanner></Mobilebanner>
    <PrdoctsForMobile></PrdoctsForMobile>
    <EcommerceFooter></EcommerceFooter>
    <div className='fixed bottom-0 z-[1000]'>
      <MobileLowerMenu></MobileLowerMenu>
    </div>
    </>
  )
}

export default EcommerceApp