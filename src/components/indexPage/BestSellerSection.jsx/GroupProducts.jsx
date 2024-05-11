import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import BestSellingProducts from "./bestSellingData.js";


function BestSellingProductsSection(){

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const h2Style = {
    textAlign: 'center',
  }

  return(
  <div>
    <h2 style={h2Style}>Best Sellers</h2>
    <Carousel 
      responsive={responsive}
    >
      {BestSellingProducts.map((product, index) => {
        return <Product 
          key={index}
          url={product.url}
          type={product.type}
          name={product.name}
          price={product.price}
          size={product.size}
        />
      })}
    </Carousel>
  </div>
  
  )
}


export default BestSellingProductsSection;

