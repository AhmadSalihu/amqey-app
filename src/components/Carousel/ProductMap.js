import React from 'react'
import ProductCarousel from './productCarousel'
import Carousel from 'react-multi-carousel';
import data from './productData'

import 'react-multi-carousel/lib/styles.css';
	

const ProductMap = () => {
	return (
		<Carousel
	additionalTransfrom={0}
  arrows
	autoPlaySpeed={4000}
	autoPlay={true}		
  centerMode={false}
  className=""
  containerClass="container"
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
      items: 4,
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
				data.products.map(item => (
					<ProductCarousel key={item.id} item={item} />
				))
			}
		</Carousel>
	)
}

export default ProductMap
