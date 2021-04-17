import React from 'react'
import { data } from './data'
import Products from './Products'


export default function HomeScreen() {


  return (
    <div className="row center">
    {
      data.map(data => (
        <Products key={data._id} data={data} /> 
      ))
    }
    </div>
  )
}

		// <Carousel>
		// <Carousel.Item interval={7000}>
		// </Carousel.Item>
		// 	</Carousel>  



