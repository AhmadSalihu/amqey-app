import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addItem } from '../../redux-store/cart/cart.actions';
import PRODUCT_DATA from './productData'

import './ProductDetails-Page.styles.css';

const ProductPage = ({ match, addItem }) => {
	const data = PRODUCT_DATA;
	const product = data.items.find((item) => item.id === Number(match.params.id))
	const { imageUrl, name, price, description, countInStock } = product;
	if (!product) {
		return (
			<h3>Product Not Found</h3>
		)
	}

	return (
			<div>
			<Link to="/shop">Back to shop</Link>
			<div className="row top">
				<div className="col-one">
					<img className="medium" src={imageUrl} alt={name} />
				</div>
				<div className="col-two body">
					<ul>
						<li>
							<h1>{name}</h1>
						</li>
						<li>Price: ₦{price}</li>
						<li>Description: {description}</li>
					</ul>
				</div>
				<div className="col-one card">
					<div className="card card-body">
						<ul>
							<li>
								<div className="row">
									<div>Price</div>
									<div className="price">₦{price}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Status</div>
									<div>{countInStock > 0 ? (
										<span className="success">IN STOCK</span>
									) : (
											<span className="error">Unavailbale</span>
									)}
									</div>
								</div>
							</li>
							<li>
								<button className="primary block" onClick={() => addItem(product)}>Add to Cart</button>
							</li>
						</ul>
					</div>	
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
  addItem: product => dispatch(addItem(product))
});

export default withRouter(connect(
	null,
	mapDispatchToProps)(ProductPage));