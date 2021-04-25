import React from 'react'
import { Link } from 'react-router-dom'

import './subnavbar.styles.scss';

const SubNavigationBar = () => {
	return (
		<div className="subnavbar">
			<ul className="link-class">
			<div className="all-category">
			<i className="fas fa-bars"></i> All categories
			</div>
				<li><Link to='/shop/jackets'>Cosmetics</Link> </li>
				<li><Link to='/shop/phones'>Phones</Link> </li>
				<li><Link to='/shop/restaurant'>Restaurant</Link> </li>
				<li><Link to='/shop/woemens'>Womens cloth</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/hats'>Hats</Link> </li>
			</ul>
		</div>
	)
}

export default SubNavigationBar
