import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey = 'pk_test_51IdvwHEjnnAmVXftljND6KIWQTCquzFBt6RMh0m93cJJcjnZtiZCN1wHp6HsPWBhhLuru6nn0XTighxz0AN9SPSk00sQ0kD0kO';
	const onToken = token => {
		console.log(token)
		alert("Payment Successful")
	} 
	return (
		<StripeCheckout
			label="Pay Now"
			name="Amqey"
			currency="NGN"
			billingAddress
			shippingAddress 
			image='/favicon.ico'
			description={`Your total is ₦${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishKey}

		/>
	);
}

export default StripeCheckoutButton
