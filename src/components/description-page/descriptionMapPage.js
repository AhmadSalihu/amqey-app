import React from 'react';
import { connect } from 'react-redux';
import DescriptionPage from './description-page';

const DescriptionMapPage = ({ cartItems }) => {
	return (
		<div>
				<div  className="description">
						{
					cartItems.map(cartItem => <DescriptionPage key={cartItem.id} item={cartItem} /> )
						}
						</div>
					</div>
	
	)
}

const mapStateToProps = ({ cart: { cartItems }}) => ({
	cartItems
})

export default connect(mapStateToProps)(DescriptionMapPage)
