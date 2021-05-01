/* eslint-disable no-lone-blocks */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const SubHeader = () => {
	return (
					<Carousel> 
						<Carousel.Item interval={7000}>
					<img
						className="d-block w-100"
						src="/amheader/am01.jpg"
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img
						className="d-block w-100"
						src="/amheader/am02.jpg"
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={5000}> 
					<img
						className="d-block w-100"
						src="/amheader/am03.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
				<Carousel.Item interval={5000}> 
					<img
						className="d-block w-100"
						src="/amheader/am05.jpg"
						alt="Third slide"
					/>
				</Carousel.Item>
				</Carousel>
	)
}

export default SubHeader;
