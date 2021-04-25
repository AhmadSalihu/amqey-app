import { Paper } from '@material-ui/core'
import React from 'react'
import './category-list.styles.css'
import '../footercomponent/footer.styles.css'


const CategoryList = () =>  (
		<nav>
		<ul>
			<li className="dropdown	"><a href='/'>Cosmetics<span>&rsaquo;</span></a>
				<ul>
				<Paper className="papper-background">
					<li className="dropdown-two"><a href='/'>Oral Hygien</a></li>
					<li><a href='/'>Shaving Preparation</a></li>
					<li><a href='/'>Suntan Preparation</a></li>
					<li><a href='/'>Bathing</a></li>
					<li><a href='/'>Face MakeUp</a></li>
					<li><a href='/'>Fragrance</a></li>
					<li><a href='/'>Eye MakeUp</a></li>
					<li><a href='/'>Manicure</a></li>
					<li><a href='/'>SkinCare(creams, powder, spray)</a></li>
				</Paper>
				</ul>
			</li>
			<li className="dropdown"><a href='/'>Computers & Electronics<span>&rsaquo;</span></a>
				<ul>
				<Paper  className="papper-background">
					<li><a href='/'>HP Laptops</a></li>
					<li><a href='/'>Dell Computers</a></li>
					<li><a href='/'>Audio and Home Theater</a></li>
					<li><a href='/'>Computer Accessories</a></li>
				</Paper>
			</ul>
			</li>
			<li className="dropdown"><a href='/'>Fashion<span>&rsaquo;</span></a>
				<ul>
				<Paper  className="papper-background">
				<li><a href='/'>Womens</a></li>
				<li><a href='/'>Mens</a></li>
				<li><a href='/'>Kidss</a></li>
				<li><a href='/'>Childrens</a></li>
				</Paper>
			</ul>
			</li>
			<li className="dropdown"><a href='/'>Amqey Services<span>&rsaquo;</span></a>
				<ul>
				<Paper  className="papper-background">
					<li><a href='/'>Cash Withdraw</a></li>
					<li><a href='/'>Laundry and Dry Cleaning</a></li>
				</Paper>
			</ul>
			</li>
			<li className="dropdown"><a href='/'>Amqey Food<span>&rsaquo;</span></a>
				<ul>
				<Paper  className="papper-background">
					<li><a href='/'>Bakery</a></li>
					<li><a href='/'>Fruits& Fruits juice</a></li>
					<li><a href='/'>Fast Food</a></li>
					<li><a href='/'>Livestock</a></li>
					<li><a href='/'>Restaurant</a></li>
				</Paper>
			</ul>
			</li>
			<li><a href='/'>Mens Wear</a></li>			
		</ul>
		</nav>
	)

export default CategoryList
