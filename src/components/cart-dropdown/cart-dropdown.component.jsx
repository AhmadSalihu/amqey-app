import React from 'react'
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux-store/cart/cart.selectors';
import CartItemBox from '../cart-item/cartItem-component';
import CustomButton from '../custom-button.component/CustomButton';
import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{ 
					cartItems.map(cartItem => (<CartItemBox key={cartItem.id} item={cartItem}
					/>
					)) 		
				}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)
   