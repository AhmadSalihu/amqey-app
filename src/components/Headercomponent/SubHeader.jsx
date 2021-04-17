import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom'
 

const SubHeader = () => {
	const location = useLocation();
	return (
		<div>
		{
			location.pathname === '/' && (
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
					</Carousel>  		
			)
		}
		</div>
	)
}

export default SubHeader;
