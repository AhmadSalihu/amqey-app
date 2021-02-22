import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-icon.svg'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../redux-store/cart/cart.selectors'; 
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux-store/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className='cart-icon'>
			<ShoppingIcon className='shopping-icon'onClick={toggleCartHidden} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
