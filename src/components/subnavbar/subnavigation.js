import React from 'react'

import './subnavbar.styles.css';

const SubNavigationBar = () => (
	<nav>
		<div className="wrapper">
			{/* <div className="logo"><a href="/shop">Categories</a></div> */}
			<input type="radio" name="slider" id="menu-btn" />
			<input type="radio" name="slider" id="close-btn" />
			<ul className="nav-links">
				<label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
				{/* <li><a href="/shop">Categories</a></li> */}
					<li>
					<a href="/" class="desktop-item">Supermarket</a>
						<input type="checkbox" id="showMega" />
						<label for="showMega" class="mobile-item">Supermarket</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>FOOD CUPBOARD</header>
								<ul className="mega-links">
									<li><a href="/">Grain & Rice</a></li>	
									<li><a href="/">Pasta</a></li>	
									<li><a href="/">Noodles</a></li>	
									<li><a href="/">Breakfast Foods</a></li>	
									<li><a href="/">Flour & Mills</a></li>	
									<li><a href="/">Seasoning & Spices</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Process Foods</header>
								<ul className="mega-links">
									<li><a href="/">Cereals</a></li>	
									<li><a href="/">Biscuits</a></li>	
									<li><a href="/">Candy & Chocolate</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>HOUSEHOLD ITEMS</header>
								<ul className="mega-links">
									<li><a href="/">Air Freshners</a></li>	
									<li><a href="/">Toilets Paper & Wipes</a></li>	
									<li><a href="/">Dishwashing</a></li>	
									<li><a href="/">Detergents</a></li>	
									<li><a href="/">Bathroom Cleaners</a></li>	
									<li><a href="/">Bathing Soap</a></li>	
									<li><a href="/">laundry Soap</a></li>	
									<li><a href="/">Tooth Paste & Brush</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Restaurants</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
						</div>
						</div>
				</li>
					<li>
					<a href="/" class="desktop-item">Restaurants & Services</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Restaurants & Servicess</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<img src="/amheader/fast-food.jpg" alt="" />
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">Restaurants</a></li>	
									<li><a href="/">Fast Foods</a></li>	
									<li><a href="/">Bakery</a></li>	
									<li><a href="/">Fruite & Fruits Juice</a></li>	
									<li><a href="/">Livestock</a></li>	
								</ul>
							</div>
							<div className="row">
								<img src="/amheader/cash-services.jpg" alt="" />
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">Cash Services</a></li>	
									<li><a href="/">Laundery Services</a></li>
								</ul>
							</div>
						</div>
					</div>
				</li>
					<li>
					<a href="/" className="desktop-item">Phones & Tablets</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Phones & Tablets</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Restaurants</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" className="desktop-item">Fashions</a>
					<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Fashions</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<img src="/favicon.ico" alt="" />
							</div>
							<div className="row">
								<header>Women Fashions</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Mens fashion</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Sunglasses</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" class="desktop-item">Computer Electronics</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Computer Electronic</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Restaurants</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
					<li>
					<a href="/">Health & Beauty</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Health & Beauty</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<img src="/favicon.ico" alt="" />
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Restaurants</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" class="desktop-item">Home & Office</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Home & Office</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Restaurants</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu 1</a></li>	
									<li><a href="/">dropMega menu 2</a></li>	
									<li><a href="/">dropMega menu 3</a></li>	
									<li><a href="/">dropMega menu 4</a></li>	
									<li><a href="/">dropMega menu 5</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" class="desktop-item">Accomodation & Hotel</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" class="mobile-item">Accomodation & Hotels</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Amqey Restaurants</header>
								<ul className="mega-links">
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
									<li><a href="/">dropMega menu</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
		</div>
	</nav>
)

export default SubNavigationBar;
 