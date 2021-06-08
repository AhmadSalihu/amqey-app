import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { addItem } from '../../redux-store/cart/cart.actions';
import { sliderProduct } from '../../redux-store/product-slider/product-slider.selectors';

import './detail.styles.css'

const DetailPage = ({ collections, match }) => {
	const item  = collections.products.find((item) => item.id === Number(match.params.id));

	const { imageUrl, name, price, description, countInStock } = item;

	if (!item) {
		return (
			<h1>Product Not Found</h1>
		)
	}
	return (
		<div>
			<Link to="/">Back to shop</Link>
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
								<button className="primary block" onClick={() => addItem(item)}>Add to Cart</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const mapStateToProps = createStructuredSelector({
	collections: sliderProduct
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps)(DetailPage));

