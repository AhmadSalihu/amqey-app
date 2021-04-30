import React from 'react'
import { Link } from 'react-router-dom'

import './subnavbar.styles.css';

const SubNavigationBar = () => {
	return (
		<div className="wrapper">
		<nav>
				<ul>
					<li><a href="/">Cosmetics</a></li>
					<li><a href="/">Amqey Foods</a></li>
					<li className="dropdown">
						<a href="/">Restaurant</a>
						<ul className="menu-area">
							<ul>
								<h4>Our Restaurants</h4>
								<img src="/favicon.ico.png" alt="" />
							</ul>
							<ul>
								<h4>Foods Services</h4>
								<li><a href="/">Bakery</a></li>
								<li><a href="/">Fast food</a></li>
								<li><a href="/">Fruits and Juice</a></li>
								<li><a href="/">Livestock</a></li>
								<li><a href="/">Restaurants</a></li>
							</ul>
							<ul>
								<h4>Our Restaurants</h4>
								<ul>
								<h4>Foods Services</h4>
								<li><a href="/">Bakery</a></li>
								<li><a href="/">Fast food</a></li>
								<li><a href="/">Fruits and Juice</a></li>
								<li><a href="/">Livestock</a></li>
								<li><a href="/">Restaurants</a></li>
							</ul>
								<ul>
								<h4>Amqey Foods</h4>
								<li><a href="/">Bakery</a></li>
								<li><a href="/">Fast food</a></li>
								<li><a href="/">Fruits and Juice</a></li>
								<li><a href="/">Livestock</a></li>
								<li><a href="/">Restaurants</a></li>
							</ul>
							</ul>
						</ul>
					</li>
			</ul>		
		</nav>
		</div>
	)
}

export default SubNavigationBar
