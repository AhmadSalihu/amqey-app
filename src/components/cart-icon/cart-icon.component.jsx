import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as MdIcons from 'react-icons/md'

import { selectCartItemsCount } from '../../redux-store/cart/cart.selectors'; 
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux-store/cart/cart.actions';

const CartIcon = ({ itemCount, history }) => {
	return (
		<div className='cart-icon' onClick={() => history.push('/checkout')}>
			<div>			
			<MdIcons.MdAddShoppingCart className="md" />
		</div>
			<span className='item-count'>{itemCount}</span>
		</div>
	)
}	

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state)
})


const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIcon));
