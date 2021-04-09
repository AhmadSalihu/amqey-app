import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../../components/checkout-item/checkoutitem';
import StripeCheckoutButton from '../../../components/stripe-button/stripe-button';
import { selectCartItems, selectCartTotal } from '../../../redux-store/cart/cart.selectors';

import './checkout-page.styles.scss'; 	

const CheckoutPage = ({ cartItems, total }) => {	
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			}
			<div className="total">
				Total: ₦{total}
				</div>
				<div className="text-warning">
					*Please used the following number for credit card payment*
						<br />
					4242 4242 4242 4242 - Exp: 06/22 - CVV: 123
			</div>
			<div className="button">
				<StripeCheckoutButton  price={total} />
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})
// {href"https://paystack.com/pay/agricard_payment"}
export default connect(mapStateToProps)(CheckoutPage);
