import React from 'react'
import { useLocation } from 'react-router-dom';

import './subnavbar.styles.css';

const SubNavigationBar = () => {
	const location = useLocation();
	return (
		<nav>
			{
				location.pathname === '/' && (
					<div className="wrapper">
			{/* <div className="logo"><a href="/shop">Categories</a></div> */}
			<input type="radio" name="slider" id="menu-btn" />
			<input type="radio" name="slider" id="close-btn" />
			<ul className="nav-links">
				<label for="close-btn" className="btn close-btn"><i class="fas fa-times"></i></label>
				{/* <li><a href="/shop">Categories</a></li> */}
					<li>
					<a href="/" className="desktop-item">Supermarket</a>
						<input type="checkbox" id="showMega" />
						<label for="showMega" className="mobile-item">Supermarket</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Foods Cupboard</header>
								<ul className="mega-links">
									<li><a href="/">Baking Products</a></li>	
									<li><a href="/">Grain & Rice</a></li>	
									<li><a href="/">Breakfast Foods</a></li>	
									<li><a href="/">Flour & Mills</a></li>	
									<li><a href="/">Seasoning & Spices</a></li>	
									<li><a href="/">Pasta & Noodles </a></li>	
									<li><a href="/">Fats & Oil</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Processed Foods</header>
								<ul className="mega-links">
									<li><a href="/">Candy & Chocolate</a></li>	
									<li><a href="/">Dairy Milk Products</a></li>	
									<li><a href="/">Tea & Coffea</a></li>	
									<li><a href="/">Cereals products</a></li>	
									<li><a href="/">Biscuits</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Household Items</header>
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
								<header>Bevarages</header>
								<ul className="mega-links">
									<li><a href="/">Coca-cola & Fanta</a></li>	
									<li><a href="/">Malt</a></li>	
									<li><a href="/">C-way and Faro</a></li>	
									<li><a href="/">Energy Drinks</a></li>	
									<li><a href="/">Bottle Water</a></li>	
								</ul>
							</div>
						</div>
						</div>
				</li>
					<li>
					<a href="/" className="desktop-item">Restaurants & Services</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Restaurants & Servicess</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<img src="/amheader/fast-food.jpg" alt="" />
							</div>
							<div className="row">
								<header>Amqey Foods</header>
								<ul className="mega-links">
									<li><a href="/">Fruite & Fruits Juice</a></li>	
									<li><a href="/">Fast Foods</a></li>	
									<li><a href="/">Restaurants</a></li>	
									<li><a href="/">Livestock</a></li>	
									<li><a href="/">Bakery Products</a></li>	
								</ul>
							</div>
							<div className="row">
								<img src="/amheader/cash-services.jpg" alt="" />
							</div>
							<div className="row">
								<header>Amqey Services</header>
								<ul className="mega-links">
									<li><a href="/">Withdraw Cash</a></li>	
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
								<img src="/amheader/amqey-phones.jpg" alt="" />
							</div>
							<div className="row">
								<br/>
								<header>Mobile Phones</header>
								<ul className="mega-links">
									<li><a href="/">Infinix Phones</a></li>	
									<li><a href="/">Tecno Phones</a></li>	
									<li><a href="/">Nokia Phones</a></li>	
									<li><a href="/">Samsung Phones</a></li>	
									<li><a href="/">Oppo Phones</a></li>	
									<li><a href="/">Honor Phoes</a></li>	
									<li><a href="/">Iphones</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Tablets</header>
								<ul className="mega-links">
									<li><a href="/">Samsung Tablets</a></li>	
									<li><a href="/">Tecno Tablets</a></li>	
									<li><a href="/">Hauwei Tablets</a></li>	
									<li><a href="/">Lenovo Tablets</a></li>	
									<li><a href="/">Honor Tablets</a></li>	
									<li><a href="/">Iphones Tablets</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Phone Accessories</header>
								<ul className="mega-links">
									<li><a href="/">Phones Cases</a></li>	
									<li><a href="/">Batteries</a></li>	
									<li><a href="/">Screen Gurads</a></li>	
									<li><a href="/">Device Components</a></li>	
									<li><a href="/">Earpiece & Charger</a></li>	
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
								<img src="/amheader/mens-fabrics.jpg" alt="" />
							</div>
							<div className="row">
								<header>Mens fashion</header>
								<ul className="mega-links">
									<li><a href="/">Mens Fabrics</a></li>	
									<li><a href="/">Mens Shoes</a></li>	
									<li><a href="/">Mens Shirt</a></li>	
									<li><a href="/">Mens Underware</a></li>	
									<li><a href="/">Male Trousers</a></li>	
									<li><a href="/">Sweater Men&Female</a></li>	
								</ul>
							</div>
								<div className="row">
								<img src="/amheader/ladies-top.jpg" alt="" />
							</div>
							<div className="row">
								<header>Womens Fashion</header>
								<ul className="mega-links">
									<li><a href="/">Ladies Atampa</a></li>	
									<li><a href="/">Ladies Shoes</a></li>	
									<li><a href="/">Veail & Head tied</a></li>	
									<li><a href="/">Women Underware</a></li>	
									<li><a href="/">Ladies hand Bags</a></li>	
									<li><a href="/">Ladies Tops</a></li>	
									<li><a href="/">Womens Jawelleries</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" className="desktop-item">Computer Electronics</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Computer Electronic</label>
					<div className="mega-box">
						<div className="content">
								<div className="row">
								<img src="/amheader/computers.png" alt="" />
							</div>
							<div className="row">
								<header>Laptops Computers</header>
								<ul className="mega-links">
									<li><a href="/">Mac Book</a></li>	
									<li><a href="/">HP Laptops</a></li>	
									<li><a href="/">Samsung</a></li>	
									<li><a href="/">Dell Laptops</a></li>	
									<li><a href="/">Lenovo Computer</a></li>	
									<li><a href="/">Accer Laptop</a></li>	
									<li><a href="/">Toshibo</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Electronic-Computers</header>
								<ul className="mega-links">
									<li><a href="/">Home Theater</a></li>	
									<li><a href="/">Flat Screen Televisions</a></li>	
									<li><a href="/">Computer Accessories</a></li>	
								</ul>
							</div>
								<div className="row">
								<img src="/amheader/flat-screen.jpg" alt="" />
							</div>
						</div>
					</div>
				</li>
					<li>
					<a href="/" className="desktop-item">Health & Beauty</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Health & Beauty</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Make Up</header>
								<ul className="mega-links">
									<li><a href="/">Eyelinear & Kajal</a></li>	
									<li><a href="/">Eye Shadow</a></li>	
									<li><a href="/">Foundation</a></li>	
									<li><a href="/">Lip Glosses</a></li>	
									<li><a href="/">Lip Stick</a></li>	
									<li><a href="/">Mascara & Powder</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Health</header>
								<ul className="mega-links">
									<li><a href="/">Oral Hygien Care</a></li>	
									<li><a href="/">Skin Care</a></li>	
									<li><a href="/">Face Protection</a></li>	
									<li><a href="/">Hand Sanitizers</a></li>	
									<li><a href="/">Labs, Safety & hand Gloves</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Hair Care</header>
								<ul className="mega-links">
									<li><a href="/">Hair & Scalp Care</a></li>	
									<li><a href="/">Hair Accessories</a></li>	
									<li><a href="/">Shampoo & Condition </a></li>	
									<li><a href="/">Wigs & accessories</a></li>	
									<li><a href="/">Dry Hair Oil</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Oral Hygien Care</header>
								<ul className="mega-links">
									<li><a href="/">Dental Care kits</a></li>	
									<li><a href="/">Teet Whitening</a></li>	
									<li><a href="/">Dental floss & picks</a></li>	
									<li><a href="/">Toothbrushes</a></li>	
									<li><a href="/">Toothpaste</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" className="desktop-item">Home & Office</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Home & Office</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Home & Kitchen</header>
								<ul className="mega-links">
									<li><a href="/">Home Furniture</a></li>	
									<li><a href="/">Cutlery & Knifes</a></li>	
									<li><a href="/">floor care</a></li>	
									<li><a href="/">Cookware</a></li>	
									<li><a href="/">Bakeware</a></li>	
									<li><a href="/">Bathing tools</a></li>	
									<li><a href="/">Bedding</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Small Appliances</header>
								<ul className="mega-links">
									<li><a href="/">Ironing & laundry</a></li>	
									<li><a href="/">Kettles</a></li>	
									<li><a href="/">Mixing & Blending</a></li>	
									<li><a href="/">Microwave Oven</a></li>	
									<li><a href="/">Kitchen Bundles</a></li>	
									<li><a href="/">Vacuum Cleaners</a></li>	
								</ul>
							</div>
							<div className="row">
								<header className="title-header">Ofiice Items</header>
								<ul className="mega-links">
									<li><a href="/">Package material</a></li>	
									<li><a href="/">Office & School</a></li>	
									<li><a href="/">Offices & Furniture lightening</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Large Appliances</header>
								<ul className="mega-links">
									<li><a href="/">Air conditioners</a></li>	
									<li><a href="/">Dishwashers</a></li>	
									<li><a href="/">Refregrators</a></li>	
									<li><a href="/">Freezers</a></li>	
									<li><a href="/">Cooking Items</a></li>	
									<li><a href="/">Fans</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<a href="/" className="desktop-item">Accomodation & Hotel</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Accomodation & Hotels</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<img src="/amheader/hotel.jpg" alt="" />
							</div>
								<div className="row">
								<img src="/amheader/hall-booking.png" alt="" />
							</div>
							<div className="row">
								<header>Accomodation & Housees</header>
								<ul className="mega-links">
									<li><a href="/">Hall Booking</a></li>	
									<li><a href="/">Rental House</a></li>	
									<li><a href="/">House/apartments on Sale</a></li>	
									<li><a href="/">Hotel Lodge</a></li>	
								</ul>
							</div>
								<div className="row">
								<img src="/amheader/apartment.jpg" alt="" />
							</div>
						</div>
					</div>
				</li>
					<li>
					<a href="/" className="desktop-item">Others</a>
						<input type="checkbox" id="showMega" />
          <label for="showMega" className="mobile-item">Others</label>
					<div className="mega-box">
						<div className="content">
							<div className="row">
								<header>Automobiles</header>
								<ul className="mega-links">
									<li><a href="/">Auto Parts</a></li>	
									<li><a href="/">Tricycle KekeNapeep</a></li>	
									<li><a href="/">Bumper Stickers, Decals & Magnets</a></li>	
									<li><a href="/">Side Mirrors</a></li>	
									<li><a href="/">Power & Batteries</a></li>	
									<li><a href="/">Cars</a></li>	
								</ul>
							</div>
							<div className="row">
								<header>Phamaceutical Store</header>
								<ul className="mega-links">
									<li><a href="/">Digestive Systems</a></li>	
									<li><a href="/">Cardiovascular System</a></li>	
									<li><a href="/">Central Nervous System</a></li>	
									<li><a href="/">Antibiotics</a></li>	
									<li><a href="/">Pain Killer</a></li>	
									<li><a href="/">Infections And Infestations</a></li>	
									<li><a href="/">Pain Killer</a></li>	
									<li><a href="/">The Ear, Nose And Oropharynx</a></li>	
								</ul>
							</div>						
							<div className="row">
								<header>Sport Wares</header>
								<ul className="mega-links">
									<li><a href="/">Mens Sport Wears</a></li>	
									<li><a href="/">Womens Sport Wears</a></li>	
									<li><a href="/">Electric Cars</a></li>	
									<li><a href="/">Tennis & Racquet Sports</a></li>	
									<li><a href="/">Team Sport Accessories</a></li>	
									<li><a href="/">Bicycles</a></li>	
									<li><a href="/">Swimming Trunks</a></li>	
									<li><a href="/">Basketball</a></li>	
								</ul>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<label for="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
		</div>
		)
	}
</nav>

	)
}

export default SubNavigationBar;
 