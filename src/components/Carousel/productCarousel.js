import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addItem } from '../../redux-store/cart/cart.actions'

import './carousel.Card.styles.css'

const ProductCarousel = (props) => {
	const { addItem, item } = props;
	const { name, price, imageUrl } = item;

return (
			<div className="slider-box">
			<p className="time">New arrival</p>
		<div className="img-box">
			<a href={`/product/${item.id}`}>
				<img src={imageUrl} alt="items" />
				</a>
			</div>
			<p className="detail">{name} 
					<a href={`/product/${item.id}`} className="price">₦{price}</a>	
			</p>
			<div className="cart">
			<button onClick={() => addItem(item)}>Add To Cart</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
  null,
  mapDispatchToProps)(ProductCarousel))
