import React from 'react';
import { connect } from 'react-redux';
import { selectProductDescription } from '../../redux-store/shop/shop.selectors';
// import DescriptionPage from './description-page';

const DescriptionMapPage = ({ collections }) => {
	const { imageUrl, name, price } = collections;
	console.log(collections)
	return (
		<div>
				<div  className="row">
					DescriptionPage
						<div className="col-2">
							<img src={imageUrl} alt="" />
						</div>
						<div className="col-1">
							<ul>
								<li>
									<h1>{name}</h1>
								</li>
							</ul>
						</div>
						<div className="col-1">
							<ul>
								<li>
									<h1>{price}</h1>
								</li>
							</ul>
						</div>
					</div>
			{/* {
				cartItems.map(cartItem => (<DescriptionPage key={cartItem.id} item={cartItem}
				/>
				))
			} */}
		</div>
	)
}

const mapStateToProps = (state) => ({
	collections: selectProductDescription(state)
})

export default connect(mapStateToProps)(DescriptionMapPage)
