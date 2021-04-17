import React from 'react'
import { Link } from 'react-router-dom'

import './subnavbar.styles.scss';

const SubNavigationBar = () => {
	return (
		<div className="subnavbar">
			<ul className="link-class">
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
				<li><Link to='/shop/jackets'>Jackets</Link> </li>
			</ul>
		</div>
	)
}

export default SubNavigationBar
