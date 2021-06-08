import React from 'react'
import ProductCarousel from './productCarousel'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { sliderProduct } from '../../redux-store/product-slider/product-slider.selectors';
	

const ProductMap = ({ products }) => {
  
	return (
		<Carousel
	additionalTransfrom={0}
  arrows
	autoPlaySpeed={4000}
	autoPlay={true}		
  centerMode={false}
  className=""
  containerClass="carousel-container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={true}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 1000,
        min: 770
      },
      items: 2,
      partialVisibilityGutter: 30
			
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
			{
				products.products.map(item => (
					<ProductCarousel key={item.id} item={item} />
				))
			}
		</Carousel>
	)
}

const mapStateToProps = createStructuredSelector({
  products: sliderProduct,
});

export default connect(mapStateToProps)(ProductMap);
