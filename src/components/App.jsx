import React from 'react';
import Hero from './indexPage/Hero';
import ReviewSection from './indexPage/ReviewSectionFolder/ReviewSection';
import GroupProductSection from './indexPage/CollectionsFolder/GroupCollections';
import BestSellingProductsSection from './indexPage/BestSellerSection.jsx/GroupProducts';



function App(){
  return (
    <>
    <Hero />
    <GroupProductSection />
    <ReviewSection />
    <BestSellingProductsSection />
    </>

  )
}

export default App;
