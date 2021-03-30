import React from 'react';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux-store/cart/cart.actions';

import { selectCartItems } from '../../redux-store/cart/cart.selectors';

import CartItemBox from '../cart-item/cartItem-component';
import CustomButton from '../custom-button.component/CustomButton';


import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{ 
					cartItems.length ?(
					cartItems.map(cartItem => (<CartItemBox key={cartItem.id} item={cartItem}
					/>
					)) 
						):( <div className="empty-message"><span>You Cart is Empty</span>
							<Link className="go-shopping" to='/shop' onClick={() => dispatch(toggleCartHidden())}>Go Shopping</Link>
					</div>)
				}
			</div>
			<CustomButton onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden())
			}}>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
   