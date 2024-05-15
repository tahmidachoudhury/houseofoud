import React from 'react';
import Hero from './Hero';
import ReviewSection from './ReviewSectionFolder/ReviewSection';
import GroupProductSection from './CollectionsFolder/GroupCollections';
import BestSellingProductsSection from './BestSellerSection.jsx/GroupProducts';

function Home(){
  return (
    <>
      <Hero />
      <GroupProductSection />
      <ReviewSection />
      <BestSellingProductsSection />
    </>

  )
}


export default Home;